import type { DefinitionNode, DocumentNode } from 'graphql';
import { print } from 'graphql';
import fetch from 'isomorphic-fetch';

// What's the deal with *gFetch*?
// gFetch is a 0 dependency fetcher for graphql that accepts a custom fetch function
// This is useful if your platform provides you with a customer fetch. ie SvelteKit
// It also uses batched queries to batch several queries into one request.

// Two key exports from this file
// gFetch -> a fetcher that returns async

// * Main Features *
//  1. 0 deps outside of graphql and svelte kit
//  2. Allows for batched queries
//  3. Plays nice with custom fetch functions
//  4. Doesn't use it's own cache, ie, would rely on Svelte's stores
export declare type GFetchQueryDefault = {
	errors?: Error[];
	status: 'INITIAL' | 'LOADED' | 'LOADING' | 'ERROR';
};

export interface GSubscribeWrapperArgs<T> {
	variables?: T;
}

export interface GCacheFunctionOptions {
	update?: boolean;
	fresh?: boolean;
	localStorage?: boolean;
}

type OptionalPropertyNames<T> = {
	[K in keyof T]-?: {} extends { [P in K]: T[K] } ? K : never;
}[keyof T];

type SpreadProperties<L, R, K extends keyof L & keyof R> = {
	[P in K]: L[P] | Exclude<R[P], undefined>;
};

type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

type SpreadTwo<L, R> = Id<
	Pick<L, Exclude<keyof L, keyof R>> &
		Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>> &
		Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>> &
		SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>
>;

type Spread<A extends readonly [...any]> = A extends [infer L, ...infer R]
	? SpreadTwo<L, Spread<R>>
	: unknown;

export declare type GFetchQueries = {
	query: DocumentNode;
	variables?: Record<string, unknown>;
};

// Turns graphql document into a string
export const stringifyDocument = (node: string | DefinitionNode | DocumentNode): string => {
	const str = (typeof node !== 'string' ? print(node) : node)
		.replace(/([\s,]|#[^\n\r]+)+/g, ' ')
		.trim();
	return str;
};

type gFetchProperties = {
	queries: GFetchQueries[];
	fetch: typeof fetch;
};

interface FetchOptions {
	credentials: 'include' | 'omit' | 'same-origin';
}

export type GClientOptions = {
	path: string;
	fetchOptions?: FetchOptions;
};

export type GGetParameters<Variables> = {
	variables?: Variables;
	fetch: typeof fetch;
};

export type GFetchReturnWithErrors<T> = Spread<[T, GFetchQueryDefault]>;

export class GFetch extends Object {
	public path: string;
	public fetchOptions?: FetchOptions;

	constructor(options: GClientOptions) {
		super();
		const { path, fetchOptions } = options;
		this.path = path;
		this.fetchOptions = fetchOptions;
		this.fetch = this.fetch.bind(this);
	}

	// * gFetch
	// This is a fetcher that returns a promise that resolves to a graphql response
	public async fetch<T>({
		queries,
		fetch: sk_fetch
	}: gFetchProperties): Promise<GFetchReturnWithErrors<T>> {
		const document_string: string = stringifyDocument(queries[0].query);
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
		} catch (err) {
			console.error('❓ gFetch Error - ', err);
			return {
				...data,
				status: 'ERROR',
				errors: [err] as Error[]
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
