import {
  visit,
  GraphQLSchema,
  concatAST,
  Kind,
  FragmentDefinitionNode,
  OperationDefinitionNode,
} from "graphql";
import { Types, PluginFunction } from "@graphql-codegen/plugin-helpers";
import { ClientSideBaseVisitor } from "@graphql-codegen/visitor-plugin-common";
import pascalCase from "just-pascal-case";

export const plugin: PluginFunction<any> = (
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config
) => {
  const allAst = concatAST(documents.map((d) => d.document));

  const allFragments = [
    ...(
      allAst.definitions.filter(
        (d) => d.kind === Kind.FRAGMENT_DEFINITION
      ) as FragmentDefinitionNode[]
    ).map((fragmentDef) => ({
      node: fragmentDef,
      name: fragmentDef.name.value,
      onType: fragmentDef.typeCondition.name.value,
      isExternal: false,
    })),
    ...(config.externalFragments || []),
  ];

  const visitor = new ClientSideBaseVisitor(
    schema,
    allFragments,
    {},
    { documentVariableSuffix: "Doc" },
    documents
  );
  const visitorResult = visit(allAst, { leave: visitor });

  const operations = allAst.definitions.filter(
    (d) => d.kind === Kind.OPERATION_DEFINITION
  ) as OperationDefinitionNode[];

  const defaultTypes = `

type FetchWrapperArgs<T> = {
	fetch: typeof fetch,
	variables?: T,
}

type SubscribeWrapperArgs<T> = {
	variables?: T,
}

interface CacheFunctionOptions {
	update?: boolean
}

`;

  const ops = operations
    .map((o) => {
      if (o) {
        const name = o?.name?.value || "";
        // const dsl = `export const ${pascalCase(op.name.value)}Doc = gql\`
        // ${documents.find((d) => d.rawSDL.includes(`${op.operation} ${op.name.value}`)).rawSDL}\``
        const op = `${pascalCase(name)}${pascalCase(o.operation)}`;
        const pascalName = pascalCase(name);
        const opv = `${op}Variables`;
        let operations = "";

        if (o.operation === "query") {
          operations += `
export const ${name}Store = writable()

export const ${name} = ({ variables, fetch}: FetchWrapperArgs<${opv}>):
	Promise<GFetchReturnWithErrors<${op}>> =>
		g.fetch<${op}>({
			queries: [{ query: ${pascalName}Doc, variables }],
			fetch
		})


// Cached
export async function get${pascalCase(
            name
          )}({ fetch, variables }: GGetParameters<${opv}>, options?: CacheFunctionOptions) {
	const data = await g.fetch<${op}>({
		queries: [{ query: ${pascalName}Doc, variables }],
		fetch
	})
	await ${name}Store.set({ ...data})	
	await gQuery(${name}, { query: ${name}, variables }, options)
}

`;
          // If config is set to have subscription query, also write the
          if (config.subscriptionQuery) {
            operations += `
export const ${name}Subscribe = ({ variables }: SubscribeWrapperArgs<${opv}>):
Readable<GFetchReturnWithErrors<${op}>> =>
		g.oFetch<${op}>({
			queries: [{ query: ${pascalName}Doc, variables }]
		})
	`;
          }
        } else if (o.operation === "mutation") {
          operations += `
export const ${name} = ({ variables }: SubscribeWrapperArgs<${opv}>):
Promise<GFetchReturnWithErrors<${op}>> =>
	g.fetch<${op}>({
		queries: [{ query: ${pascalName}Doc, variables }],
		fetch,
	})
`;
        }

        return operations;
      }
    })
    .join("\n");

  const imports = [
    `import type { Readable } from "svelte/store"`,
    `import { writable } from "svelte/store"`,
    `import { g } from '${config.gPath}'`,
    `import type { GFetchReturnWithErrors, GGetParameters } from '@leveluptuts/g-query'`,
    `import { gQuery } from '@leveluptuts/g-query'`,
    `import gql from "graphql-tag"`,
  ];

  return {
    prepend: imports,
    content: [
      defaultTypes,
      visitor.fragments,
      ...visitorResult.definitions.filter((t) => typeof t == "string"),
      ops,
    ].join("\n"),
  };
};
