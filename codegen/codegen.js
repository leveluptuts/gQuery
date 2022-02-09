import { concatAST, Kind, } from "graphql";
import { oldVisit, } from "@graphql-codegen/plugin-helpers";
import { ClientSideBaseVisitor, } from "@graphql-codegen/visitor-plugin-common";
import pascalCase from "just-pascal-case";
// The main codegen plugin.
export const plugin = (schema, documents, config) => {
    // Get all graphql documents
    const allAst = concatAST(documents.map((d) => d.document));
    // Get all fragments
    const allFragments = [
        ...allAst.definitions.filter((d) => d.kind === Kind.FRAGMENT_DEFINITION).map((fragmentDef) => ({
            node: fragmentDef,
            name: fragmentDef.name.value,
            onType: fragmentDef.typeCondition.name.value,
            isExternal: false,
        })),
        ...(config.externalFragments || []),
    ];
    //   Create the visitor
    const visitor = new ClientSideBaseVisitor(schema, allFragments, config, { documentVariableSuffix: "Doc" }, documents);
    //   Visit all the documents
    const visitorResult = oldVisit(allAst, { leave: visitor });
    // Filter out the operations
    const operations = allAst.definitions.filter((d) => d.kind === Kind.OPERATION_DEFINITION);
    //   The default required types. These should probably live somewhere else and be imported
    //   TODO: move to a file
    const defaultTypes = `
type SubscribeWrapperArgs<T> = {
	variables?: T,
  headers?: Headers,
  fetch?: typeof fetch;
}

interface CacheFunctionOptions {
	update?: boolean
}
`;
    // This is where the string that will be written to .gq files is created
    const ops = operations
        .map((o) => {
        var _a;
        if (o) {
            const name = ((_a = o === null || o === void 0 ? void 0 : o.name) === null || _a === void 0 ? void 0 : _a.value) || "";
            const op = `${pascalCase(name)}${pascalCase(o.operation)}`;
            const pascalName = pascalCase(name);
            const opv = `${op}Variables`;
            let operations = "";
            if (o.operation === "query") {
                operations += `
export const ${name} = writable<GFetchReturnWithErrors<${op}>>({
	errors: [],
	gQueryStatus: 'LOADING',
})

// Cached
export async function get${pascalName}({ fetch: f, variables, headers }: GGetParameters<${opv}>, options?: CacheFunctionOptions) {
	const data = await g.fetch<${op}>({
		queries: [{ query: ${pascalName}Doc, variables }],
		fetch: f || fetch,
    headers,
	})
	${name}.set({ ...data, errors: data?.errors, gQueryStatus: 'LOADED' })
	return data
}

`;
            }
            else if (o.operation === "mutation") {
                // This is where the mutation code is generated
                // We're grabbing the mutation name and using it as a string in the generated code
                operations += `
export const ${name} = ({ variables, headers, fetch: f }: SubscribeWrapperArgs<${opv}>):
Promise<GFetchReturnWithErrors<${op}>> =>
	g.fetch<${op}>({
		queries: [{ query: ${pascalName}Doc, variables }],
		fetch: f || fetch,
    headers,
	})
`;
            }
            return operations;
        }
    })
        .join("\n");
    // The imports that are included at the top of the generated file
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
//# sourceMappingURL=codegen.js.map