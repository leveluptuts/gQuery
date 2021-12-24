import {
  GraphQLSchema,
  concatAST,
  Kind,
  FragmentDefinitionNode,
  OperationDefinitionNode,
} from "graphql";

import {
  Types,
  PluginFunction,
  oldVisit,
} from "@graphql-codegen/plugin-helpers";
import {
  ClientSideBaseVisitor,
  LoadedFragment,
} from "@graphql-codegen/visitor-plugin-common";
import pascalCase from "just-pascal-case";

export const plugin: PluginFunction<any> = (
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config
) => {
  const allAst = concatAST(documents.map((d) => d.document));

  const allFragments: LoadedFragment[] = [
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
    config,
    { documentVariableSuffix: "Doc" },
    documents
  );
  const visitorResult = oldVisit(allAst, { leave: visitor });

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
        const op = `${pascalCase(name)}${pascalCase(o.operation)}`;
        const pascalName = pascalCase(name);
        const opv = `${op}Variables`;
        let operations = "";

        if (o.operation === "query") {
          operations += `
export const ${name} = writable<GFetchReturnWithErrors<${op}>>()

// Cached
export async function get${pascalName}({ fetch, variables }: GGetParameters<${opv}>, options?: CacheFunctionOptions) {
	const data = await g.fetch<${op}>({
		queries: [{ query: ${pascalName}Doc, variables }],
		fetch
	})
	await ${name}.set({ ...data, errors: data?.errors, gQueryStatus: 'LOADED' })	
	return data
}

`;
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
    `import { writable } from "svelte/store"`,
    `import { g } from '${config.gPath}'`,
    `import type { GFetchReturnWithErrors, GGetParameters } from '@leveluptuts/g-query'`,
  ];

  return {
    prepend: [...imports, ...visitor.getImports()],
    content: [
      defaultTypes,
      visitor.fragments,
      ...visitorResult.definitions.filter((t) => typeof t == "string"),
      ops,
    ].join("\n"),
  };
};
// TODO
// - add option to force update of cache. ie getUserTutorials({update: true})
// if update.true is not set, then it will only update if the cache is empty
