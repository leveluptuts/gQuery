import { generate } from "@graphql-codegen/cli";
const fileRegex = /\.(graphql)$/; // not used, will be for the vite rerun
export default function levelupViteCodegen(options) {
    if (!options.schema) {
        throw new Error("No schema provided");
    }
    if (!options.output) {
        throw new Error("No output directory specified");
    }
    if (!options.gPath) {
        throw new Error("No gPath directory specified. gPath is where you've initialized the 'g' client");
    }
    const { schema, output, gPath } = options;
    console.log("running plugin");
    return {
        name: "g-query-codegen",
        async buildStart() {
            try {
                //   *1. Remove all .gGenerated files
                // TODO: Find and remove all .gGenerated files
                //   *2. Generate
                await generate({
                    schema,
                    documents: "./src/**/*.graphql",
                    generates: {
                        // * Generates the types for your schema
                        [`${process.cwd()}/${output}/types.gGenerated.ts`]: {
                            plugins: ["typescript"],
                        },
                        // * Generates near file .ts files for your fetch functions
                        [`${process.cwd()}/${output}`]: {
                            config: {
                                useTypeImports: true,
                                gPath,
                                importDocumentNodeExternallyFrom: "near-operation-file",
                                inlineFragmentTypes: "combine",
                            },
                            preset: "near-operation-file",
                            presetConfig: {
                                extension: ".gGenerated.ts",
                                folder: "./",
                                baseTypesPath: `types.gGenerated.ts`,
                            },
                            plugins: [
                                "typescript-operations",
                                "@leveluptuts/g-query/codegen-plugin", // g-query codegen plugin.
                            ],
                        },
                    },
                }, true);
            }
            catch (e) {
                console.log("❓ gFetch Warning - No `.graphql` files found.");
                console.log("❓ gFetch Warning - If you would like the gQuery generator to work (we reccomend you do).");
                console.log("❓ gFetch Warning - If you would like to add them, you will need to restart SvelteKit.");
            }
            return;
        },
        transform(src, id) { },
    };
}
//# sourceMappingURL=plugin.js.map