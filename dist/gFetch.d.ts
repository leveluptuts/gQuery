import { DefinitionNode, DocumentNode } from "graphql";
import type { Readable } from "svelte/store";
export declare type GFetchQueryDefault = {
    errors?: string[];
};
declare type OptionalPropertyNames<T> = {
    [K in keyof T]-?: {} extends {
        [P in K]: T[K];
    } ? K : never;
}[keyof T];
declare type SpreadProperties<L, R, K extends keyof L & keyof R> = {
    [P in K]: L[P] | Exclude<R[P], undefined>;
};
declare type Id<T> = T extends infer U ? {
    [K in keyof U]: U[K];
} : never;
declare type SpreadTwo<L, R> = Id<Pick<L, Exclude<keyof L, keyof R>> & Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>> & Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>> & SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>>;
declare type Spread<A extends readonly [...any]> = A extends [infer L, ...infer R] ? SpreadTwo<L, Spread<R>> : unknown;
export declare type GFetchQueryResult<F> = {
    [k: string]: F;
};
export declare type GFetchQueries = {
    query: DocumentNode;
    variables?: Record<string, unknown>;
};
export declare function gqlToString(tag: DocumentNode): string;
/**
 * Finds the Name value from the OperationDefinition of a Document
 */
export declare const getOperationName: (query: DocumentNode) => string | undefined;
export declare const stringifyDocument: (node: string | DefinitionNode | DocumentNode) => string;
declare type gFetchProperties = {
    queries: GFetchQueries[];
    fetch: typeof fetch;
};
export declare type ApolloClientOptions = {
    path?: string;
};
export declare type ApolloClient = {
    path?: string;
};
export declare type GFetchReturn<T> = {
    data: T;
    errors?: Error;
};
export declare type GGetParameters<Variables> = {
    variables?: Variables;
    fetch: typeof fetch;
};
export declare type GFetchReturnWithErrors<T> = Spread<[T, GFetchQueryDefault]>;
export declare class GFetch extends Object {
    path: string;
    constructor(options: ApolloClientOptions);
    fetch<T>({ queries, fetch, }: gFetchProperties): Promise<GFetchReturnWithErrors<T>>;
    oFetch<F>({ queries, }: {
        queries: GFetchQueries[];
    }): Readable<GFetchReturnWithErrors<F>>;
    private unsubscribe;
    private makeSubscribe;
    private fetchDataForSubscription;
}
export declare const data: import("svelte/store").Writable<unknown>;
export {};
