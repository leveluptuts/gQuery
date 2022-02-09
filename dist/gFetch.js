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
        const { path, headers } = options;
        this.path = path;
        this.headers = headers;
        this.fetch = this.fetch.bind(this);
    }
    // * gFetch
    // This is a fetcher that returns a promise that resolves to a graphql response
    async fetch({ queries, fetch, headers, }) {
        // let document: DocumentNode = addTypenameToDocument(queries[0].query);
        let documentString = stringifyDocument(queries[0].query);
        const newQueries = {
            ...queries[0],
            query: documentString,
        };
        // This is generic fetch, that is polyfilled via svelte kit
        // graph ql fetches must be POST
        // credentials include for user ssr data
        const res = await fetch(this.path, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json", ...this.headers, ...headers },
            body: JSON.stringify(newQueries),
        });
        // Gets the data back from the server
        const data = await res.json();
        return {
            ...data.data,
            errors: data.errors,
        };
    }
}
//# sourceMappingURL=gFetch.js.map