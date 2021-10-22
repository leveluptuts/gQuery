import { Kind, print, } from "graphql";
import { readable, writable } from "svelte/store";
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
    //   if (typeof node !== "string") {
    //     const operationName = "definitions" in node && getOperationName(node);
    //     if (operationName) {
    //       str = `# ${operationName}\n${str}`;
    //     }
    //     if (!node.loc) {
    //       (node as WritableLocation).loc = {
    //         start: 0,
    //         end: str.length,
    //         source: {
    //           body: str,
    //           name: "gql",
    //           locationOffset: { line: 1, column: 1 },
    //         },
    //       } as Location;
    //     }
    //   }
    return str;
};
export class GFetch extends Object {
    constructor(options) {
        super();
        const { path } = options;
        this.path = path;
        this.fetch = this.fetch.bind(this);
        this.oFetch = this.oFetch.bind(this);
    }
    // * gFetch
    // This is a fetcher that returns a promise that resolves to a graphql response
    async fetch({ queries, fetch, }) {
        // Get all the queries and transform the docs into strings
        // Fetching gql require them to be strings.
        if (!fetch && window) {
            fetch = window.fetch;
        }
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
        };
    }
    // * ogFetch
    // This function is a fetcher that returns a svelte readable subscription
    // This is to be used for client side fetching of data
    oFetch({ queries, }) {
        // 1. Build the store and initialize it as empty and error free
        const initial = new Map();
        // Creates a store that will be used to subscribe to the data
        const store = readable(initial, this.makeSubscribe(initial, queries));
        return store;
    }
    // A dummy function that is used to make subscribe happy.
    unsubscribe() {
        // Nothing to do in this case
    }
    // Part of ogFetch
    // Designed this way to work will with Svelte's readable store
    makeSubscribe(data, queries) {
        // Create a closure with access to the
        // initial data and initialization arguments
        return (set) => {
            // 3. This won't get executed until the store has
            // its first subscriber. Kick off retrieval.
            this.fetchDataForSubscription(data, set, queries);
            // We're not waiting for the response.
            // Return the unsubscribe function which doesn't do
            // do anything here (but is part of the stores protocol).
            return this.unsubscribe;
        };
    }
    // Part of ogFetch
    // Runs gFetch and updates subscription
    async fetchDataForSubscription(data, set, queries) {
        try {
            // Dispatch the request for the users
            // This code is ONLY run client side, so fetch comes globally from the browser
            const response = await this.fetch({ queries, fetch });
            set(response);
        }
        catch (error) {
            // 6b. if there is a fetch error - deal with it
            // and let observers know
            data.error = error;
            set(data);
        }
    }
}
export const data = writable();
// ! IDEAS
// Mutations should take care of updating a generated writeable.
// updateTutorial()
// $tutorial is auto updated site wide
// Devtools based on svelte toy
//# sourceMappingURL=gFetch.js.map