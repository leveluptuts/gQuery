import { generate } from "@graphql-codegen/cli";
import { execaCommand } from "execa";
const fileRegex = /\.(graphql)$/; // not used, will be for the vite rerun
export default function levelupViteCodegen(options) {
    if (!options.schema) {
        throw new Error("No schema provided");
    }
    if (!options.output) {
        throw new Error("No output directory specified for types.");
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
                //   *1. Remove all .gq files
                console.log("🧹 removing all .gq files");
                // Find and remove all .gq files
                await execaCommand("find ./ -path '*.gq.ts' -type f -prune -print -exec rm -f '{}' +; ", {
                    stdio: "inherit",
                    shell: true,
                });
                //   *2. Generate
                console.log("🤖 starting codegen");
                await generate({
                    schema,
                    documents: "./src/**/*.graphql",
                    generates: {
                        // * Generates the types for your schema
                        [`${process.cwd()}/${output}/types.gq.ts`]: {
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
                                extension: ".gq.ts",
                                folder: "./",
                                baseTypesPath: `types.gq.ts`,
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
                console.log("❓ gFetch Error - Something Happened - Here is the error and some things to consider.", e);
                console.log("❓ gFetch Error - Make sure `.graphql` are files found.");
                console.log("❓ gFetch Warning - If you would like the gQuery generator to work (we reccomend you do).");
                console.log("❓ gFetch Warning - If you would like to add them, you will need to restart SvelteKit.");
            }
            return;
        },
        transform(src, id) { },
    };
}
//# sourceMappingURL=plugin.js.map