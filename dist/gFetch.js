import { print } from "graphql";
export const stringifyDocument = (node) => {
    let str = (typeof node !== "string" ? print(node) : node)
        .replace(/([\s,]|#[^\n\r]+)+/g, " ")
        .trim();
    return str;
};
export class GFetch extends Object {
    constructor(options) {
        super();
        const { path, fetchOptions = {} } = options;
        this.path = path;
        this.fetchOptions = fetchOptions;
        this.fetch = this.fetch.bind(this);
    }
    // * gFetch
    // This is a fetcher that returns a promise that resolves to a graphql response
    async fetch({ queries, fetch, }) {
        // let document: DocumentNode = addTypenameToDocument(queries[0].query);
        let documentString = stringifyDocument(queries[0].query);
        const newQueries = {
            ...queries[0],
            query: documentString,
        };
        let data;
        // This is generic fetch, that is polyfilled via svelte kit
        // graph ql fetches must be POST
        // credentials include for user ssr data
        try {
            const res = await fetch(this.path, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newQueries),
                ...this.fetchOptions,
            });
            // Gets the data back from the server
            data = await res.json();
            return {
                ...data.data,
                errors: data.errors,
            };
        }
        catch (err) {
            console.error("err", err);
            return {
                ...data,
                gQueryStatus: "ERROR",
                errors: [err],
            };
        }
    }
}
//# sourceMappingURL=gFetch.js.map