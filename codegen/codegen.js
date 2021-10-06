import { ClientSideBaseVisitor, } from "@graphql-codegen/visitor-plugin-common";
import { concatAST, Kind, visit, } from "graphql";
import { pascalCase } from "pascal-case";
module.exports = {
    plugin: (schema, documents, config) => {
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
        const visitor = new ClientSideBaseVisitor(schema, allFragments, {}, { documentVariableSuffix: "Doc" }, documents);
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
`;
        const ops = operations
            .map((o) => {
            var _a;
            if (o) {
                const name = ((_a = o === null || o === void 0 ? void 0 : o.name) === null || _a === void 0 ? void 0 : _a.value) || "";
                // const dsl = `export const ${pascalCase(op.name.value)}Doc = gql\`
                // ${documents.find((d) => d.rawSDL.includes(`${op.operation} ${op.name.value}`)).rawSDL}\``
                const op = `${pascalCase(name)}${pascalCase(o.operation)}`;
                const opv = `${op}Variables`;
                let operations = "";
                if (o.operation === "query") {
                    operations += `
export const ${name} = ({ variables, fetch}: FetchWrapperArgs<${opv}>):
	Promise<GFetchReturnWithErrors<${op}>> =>
		g.fetch<${op}>({
			queries: [{ query: ${pascalCase(name)}Doc, variables }],
			fetch
		})
`;
                    // If config is set to have subscription query, also write the
                    if (config.subscriptionQuery) {
                        operations += `
export const ${name}Subscribe = ({ variables }: SubscribeWrapperArgs<${opv}>):
Readable<GFetchReturnWithErrors<${op}>> =>
		g.oFetch<${op}>({
			queries: [{ query: ${pascalCase(name)}Doc, variables }]
		})
	`;
                    }
                }
                else if (o.operation === "mutation") {
                    operations += `
export const ${name} = ({ variables }: SubscribeWrapperArgs<${opv}>):
Promise<GFetchReturnWithErrors<${op}>> =>
	g.fetch<${op}>({
		queries: [{ query: ${pascalCase(name)}Doc, variables }],
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
            `import { g } from '${config.gFetchPath}'`,
            `import type { GFetchReturnWithErrors } from '$graphql/gfetchLib'`,
            `import gql from "graphql-tag"`,
        ];
        //     let schemaInputs = getCachedDocumentNodeFromSchema(schema).definitions.filter((d) => {
        //       return d.kind === 'InputObjectTypeDefinition'
        //     })
        //     let inputs = schemaInputs
        //       .map((d) => {
        //         console.log('/* START */')
        //         // @ts-ignore
        //         console.log('NAME: ', d.fields[0].name.value)
        //         // @ts-ignore
        //         let isReq = d.fields[0]?.type?.kind === 'NonNullType'
        //         console.log('REQUIRED: ', isReq ? '✅' : '❌')
        //         // @ts-ignore
        //         console.log('TYPE: ', isReq ? d.fields[0]?.type?.type?.name?.value : d.fields[0]?.type?.name?.value)
        //         // @ts-ignore
        //         // @ts-ignore
        //         console.log('d.fields[0]', d.fields[0]?.type)
        //         console.log('/* END */')
        //         console.log('')
        //         return `
        // const inputName = {
        // 	${d.fields[0].name.value}: ${isReq ? d.fields[0]?.type?.type?.name?.value : d.fields[0]?.type?.name?.value}
        // }
        // 		`
        //       })
        //       .join('\n')
        //     console.log('inputs', inputs)
        return {
            prepend: imports,
            content: [
                defaultTypes,
                visitor.fragments,
                ...visitorResult.definitions.filter((t) => typeof t == "string"),
                ops,
            ].join("\n"),
        };
    },
};
//# sourceMappingURL=codegen.js.map