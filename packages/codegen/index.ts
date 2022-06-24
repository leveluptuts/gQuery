import { concatAST, Kind } from 'graphql';
import type {
	GraphQLSchema,
	FragmentDefinitionNode,
	OperationDefinitionNode,
	DocumentNode
} from 'graphql';
import { oldVisit } from '@graphql-codegen/plugin-helpers';
import type { Types, PluginFunction } from '@graphql-codegen/plugin-helpers';
import { ClientSideBaseVisitor } from '@graphql-codegen/visitor-plugin-common';
import type { LoadedFragment } from '@graphql-codegen/visitor-plugin-common';

import pascalCase from 'just-pascal-case';

// The main codegen plugin.
export const plugin: PluginFunction = (
	schema: GraphQLSchema,
	documents: Types.DocumentFile[],
	config
) => {
	// Get all graphql documents
	const allAst: DocumentNode = concatAST(documents.map((d) => d.document) as DocumentNode[]);

	// Get all fragments
	const allFragments: LoadedFragment[] = [
		...(
			allAst.definitions.filter(
				(d) => d.kind === Kind.FRAGMENT_DEFINITION
			) as FragmentDefinitionNode[]
		).map((fragmentDef) => ({
			node: fragmentDef,
			name: fragmentDef.name.value,
			onType: fragmentDef.typeCondition.name.value,
			isExternal: false
		})),
		...(config.externalFragments || [])
	];

	//   Create the visitor
	const visitor = new ClientSideBaseVisitor(
		schema,
		allFragments,
		config,
		{ documentVariableSuffix: 'Doc' },
		documents
	);

	//   Visit all the documents
	const visitorResult = oldVisit(allAst, { leave: visitor });

	// Filter out the operations
	const operations = allAst.definitions.filter(
		(d) => d.kind === Kind.OPERATION_DEFINITION
	) as OperationDefinitionNode[];

	//   The default required types. These should probably live somewhere else and be imported
	// This is where the string that will be written to .gq files is created
	const ops = operations
		.map((o) => {
			if (o) {
				const name = o?.name?.value || '';
				const op = `${pascalCase(name)}${pascalCase(o.operation)}`;
				const pascalName = pascalCase(name);
				const opv = `${op}Variables`;
				let operations = '';

				if (o.operation === 'query') {
					operations += `
export const ${name} = writable<GFetchReturnWithErrors<${op}>>({
	errors: [],
	status: 'LOADING',
})

// Cached
export async function get${pascalName}({ fetch, variables }: GGetParameters<${opv}>, options?: GCacheFunctionOptions) {

	${
		config.default
			? 'console.log(`❓ gFetch Debug - Fetching fresh data from get${pascalName}`)'
			: ''
	}

	const data = await g.fetch<${op}>({
		queries: [{ query: ${pascalName}Doc, variables }],
		fetch
	})
	${name}.set({ ...data, errors: data?.errors, status: 'LOADED' })
	return data
}

`;
				} else if (o.operation === 'mutation') {
					// This is where the mutation code is generated
					// We're grabbing the mutation name and using it as a string in the generated code
					operations += `
export const ${name} = ({ variables }: GSubscribeWrapperArgs<${opv}>):
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
		.join('\n');

	// The imports that are included at the top of the generated file
	const imports = [
		`import { writable } from "svelte/store"`,
		`import { g } from '${config.gPath}'`,
		`import type { GFetchReturnWithErrors, GGetParameters, GSubscribeWrapperArgs, GCacheFunctionOptions  } from '@leveluptuts/g-query'`
	];

	return {
		prepend: [...imports, ...visitor.getImports()],
		content: [
			visitor.fragments,
			...visitorResult.definitions.filter((t) => typeof t == 'string'),
			ops
		].join('\n')
	};
};
// TODO
// - add option to force update of cache. ie getUserTutorials({update: true})
// if update.true is not set, then it will only update if the cache is empty
// Add option to store in local storage or better yet, store in local storage by default
