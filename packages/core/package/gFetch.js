import { print } from 'graphql';
import fetch from 'isomorphic-fetch';
// Turns graphql document into a string
export const stringifyDocument = (node) => {
    const str = (typeof node !== 'string' ? print(node) : node)
        .replace(/([\s,]|#[^\n\r]+)+/g, ' ')
        .trim();
    return str;
};
export class GFetch extends Object {
    constructor(options) {
        super();
        const { path, fetchOptions } = options;
        this.path = path;
        this.fetchOptions = fetchOptions;
        this.fetch = this.fetch.bind(this);
    }
    // * gFetch
    // This is a fetcher that returns a promise that resolves to a graphql response
    async fetch({ queries, fetch: sk_fetch }) {
        const document_string = stringifyDocument(queries[0].query);
        const new_queries = {
            ...queries[0],
            query: document_string
        };
        const body = JSON.stringify(new_queries);
        // Todo -> need a way to inject custom headers
        const headers = { 'Content-Type': 'application/json' };
        let data;
        // if fetch is defined via SK app fetch use SK App Fetch
        // Otherwise use isomorphic fetch
        const local_fetch = sk_fetch ? sk_fetch : fetch;
        // This is generic fetch, that is polyfilled via svelte kit
        // graph ql fetches must be POST
        // credentials include for user ssr data
        try {
            const res = await local_fetch(this.path, {
                method: 'POST',
                headers,
                body,
                ...this.fetchOptions
            });
            // Gets the data back from the server
            data = await res.json();
            return {
                ...data.data,
                errors: data.errors
            };
        }
        catch (err) {
            console.error('❓ gFetch Error - ', err);
            return {
                ...data,
                status: 'ERROR',
                errors: [err]
            };
        }
    }
}
// Get fresh data without caching
// Get fresh data with caching
// Get cached data
// getFrom, cache, fresh
// update? boolean
// Most of time, get stale data
// Get fresh data if requested
// TODO
// By default store in local storage
