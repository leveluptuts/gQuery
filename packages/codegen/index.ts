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

export interface gQueryOptions {
	schema: Types.Schema;
	out: string;
	gPath: string;
	debug?: boolean;
}

export interface CreateStringOptions {
	name: string;
	op: string;
	opv: string;
	pascalName: string;
	config: gQueryOptions;
}

export function create_mutation_string({ name, op, opv, pascalName }: CreateStringOptions) {
	return `
export const ${name} = ({ variables }: GSubscribeWrapperArgs<${opv}>):
Promise<GFetchReturnWithErrors<${op}>> =>
	g.fetch<${op}>({
		queries: [{ query: ${pascalName}Doc, variables }],
		fetch,
	})
`;
}

export function create_query_string({ name, op, opv, pascalName, config }: CreateStringOptions) {
	return `
export const ${name} = writable<GFetchReturnWithErrors<${op}>>({
	errors: [],
	status: 'INITIAL',
})


export async function get${pascalName}({ fetch, variables }: GGetParameters<${opv}>, { fresh = false, update = true }: GCacheFunctionOptions = {}) {
	${config.debug ? 'console.log(`❓ gFetch Debug - Fetching fresh data from get${pascalName}`)' : ''}

	let data = get(${name})

	// If data doesn't already exist in cache, OR fresh is present
	// Fresh is by default false so that it defaults to pulling from cache
	// The user can pass in fresh: true to bypass the cache.

	if (data?.status !== 'LOADED' || fresh) {
		${name}.set({ ...data, status: 'LOADING' })
		data = await g.fetch<${op}>({
			queries: [{ query: ${pascalName}Doc, variables }],
			fetch
		})
	}
	// Only update cache if options update which defaults to true
	if (update) {
		${name}.set({ ...data, errors: data?.errors, status: 'LOADED' })
	}
	return data
}
`;
}

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

	// Create the visitor
	const visitor = new ClientSideBaseVisitor(
		schema,
		allFragments,
		config,
		{ documentVariableSuffix: 'Doc' },
		documents
	);

	// Visit all the documents
	const visitorResult = oldVisit(allAst, { leave: visitor });

	// Filter out the operations
	const operations = allAst.definitions.filter(
		(d) => d.kind === Kind.OPERATION_DEFINITION
	) as OperationDefinitionNode[];

	// The default required types. These should probably live somewhere else and be imported
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
					operations += create_query_string({ name, op, opv, pascalName, config });
				} else if (o.operation === 'mutation') {
					operations += create_mutation_string({ name, op, opv, pascalName, config });
				}

				return operations;
			}
		})
		.join('\n');

	// The imports that are included at the top of the generated file
	const imports = [
		`import { writable, get } from "svelte/store"`,
		`import { g } from '${config.gPath}'`,
		`import type { GFetchReturnWithErrors, GGetParameters, GSubscribeWrapperArgs, GCacheFunctionOptions  } from '@leveluptuts/g-query'`,
		`import { check_local_storage } from '@leveluptuts/g-query'`
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
