import { Kind, print } from "graphql";
import { formatDocument as addTypenameToDocument } from "./utils/format";
// This function accepts a graphql document and returns a string to be used
// in fetch calls
export function gqlToString(tag) {
    return tag.loc.source.body;
}
/**
 * Finds the Name value from the OperationDefinition of a Document
 */
export const getOperationName = (query) => {
    for (let i = 0, l = query.definitions.length; i < l; i++) {
        const node = query.definitions[i];
        if (node.kind === Kind.OPERATION_DEFINITION && node.name) {
            return node.name.value;
        }
    }
};
export const stringifyDocument = (node) => {
    let str = (typeof node !== "string" ? print(node) : node)
        .replace(/([\s,]|#[^\n\r]+)+/g, " ")
        .trim();
    return str;
};
export class GFetch extends Object {
    constructor(options) {
        super();
        const { path } = options;
        this.path = path;
        this.fetch = this.fetch.bind(this);
    }
    // * gFetch
    // This is a fetcher that returns a promise that resolves to a graphql response
    async fetch({ queries, fetch, } = {}) {
        let document = addTypenameToDocument(queries[0].query);
        let documentString = stringifyDocument(document);
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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newQueries),
        });
        // Gets the data back from the server
        const data = await res.json();
        return {
            ...data.data,
            errors: data.errors,
        };
        // } as GFetchReturnWithErrors<T>;
    }
}
// ! IDEAS
// Mutations should take care of updating a generated writeable.
// $tutorial is auto updated site wide
//# sourceMappingURL=gFetch.js.map