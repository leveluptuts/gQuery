import { visit, concatAST, Kind, } from "graphql";
import "@graphql-codegen/plugin-helpers";
import { ClientSideBaseVisitor, } from "@graphql-codegen/visitor-plugin-common";
import pascalCase from "just-pascal-case";
export const plugin = (schema, documents, config) => {
    console.log("🛠️ Codegen Starting");
    const allAst = concatAST(documents.map((d) => d.document));
    const allFragments = [
        ...allAst.definitions.filter((d) => d.kind === Kind.FRAGMENT_DEFINITION).map((fragmentDef) => ({
            node: fragmentDef,
            name: fragmentDef.name.value,
            onType: fragmentDef.typeCondition.name.value,
            isExternal: false,
        })),
        ...(config.externalFragments || []),
    ];
    const visitor = new ClientSideBaseVisitor(schema, allFragments, config, { documentVariableSuffix: "Doc" }, documents);
    const visitorResult = visit(allAst, { leave: visitor });
    const operations = allAst.definitions.filter((d) => d.kind === Kind.OPERATION_DEFINITION);
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
        var _a;
        if (o) {
            console.log("o", o);
            const name = ((_a = o === null || o === void 0 ? void 0 : o.name) === null || _a === void 0 ? void 0 : _a.value) || "";
            const op = `${pascalCase(name)}${pascalCase(o.operation)}`;
            const pascalName = pascalCase(name);
            const opv = `${op}Variables`;
            let operations = "";
            if (o.operation === "query") {
                operations += `
export const ${name} = writable<${op}>()

export const fetch${pascalName} = ({ variables, fetch}: FetchWrapperArgs<${opv}>):
	Promise<GFetchReturnWithErrors<${op}>> =>
		g.fetch<${op}>({
			queries: [{ query: ${pascalName}Doc, variables }],
			fetch
		})


// Cached
export async function get${pascalName}({ fetch, variables }: GGetParameters<${opv}>, options?: CacheFunctionOptions) {
	const data = await g.fetch<${op}>({
		queries: [{ query: ${pascalName}Doc, variables }],
		fetch
	})
	await ${name}.set({ ...data, error: data?.error, gQueryStatus: 'LOADED' })	
	return data
}

`;
            }
            else if (o.operation === "mutation") {
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
        `import type { Writable } from "svelte/store"`,
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