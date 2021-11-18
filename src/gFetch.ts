import { DefinitionNode, DocumentNode, Kind, print } from "graphql";

import { formatDocument as addTypenameToDocument } from "./utils/format";

// What's the deal with *gFetch*?
// gFetch is a 0 dependency fetcher for graphql that accepts a custom fetch function
// This is useful if your platform provides you with a customer fetch. ie SvelteKit
// It also uses batched queries to batch several queries into one request.

// Two key exports from this file
// gFetch -> a fetcher that returns async
// ogFetch -> a fetcher that returns a subscription

// * Main Features *
//  1. 0 deps outside of graphql and svelte kit
//  2. Allows for batched queries
//  3. Plays nice with custom fetch functions
//  4. Doesn't use it's own cache, ie, would rely on Svelte's stores
export declare type GFetchQueryDefault = {
  errors?: string[];
};

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

export declare type GFetchQueryResult<F> = {
  [k: string]: F;
};

export declare type GFetchQueries = {
  query: DocumentNode;
  variables?: Record<string, unknown>;
};

// This function accepts a graphql document and returns a string to be used
// in fetch calls
export function gqlToString(tag: DocumentNode): string {
  return tag.loc.source.body;
}

/**
 * Finds the Name value from the OperationDefinition of a Document
 */
export const getOperationName = (query: DocumentNode): string | undefined => {
  for (let i = 0, l = query.definitions.length; i < l; i++) {
    const node = query.definitions[i];
    if (node.kind === Kind.OPERATION_DEFINITION && node.name) {
      return node.name.value;
    }
  }
};

export const stringifyDocument = (
  node: string | DefinitionNode | DocumentNode
): string => {
  let str = (typeof node !== "string" ? print(node) : node)
    .replace(/([\s,]|#[^\n\r]+)+/g, " ")
    .trim();
  return str;
};

type gFetchProperties = {
  queries: GFetchQueries[];
  fetch: typeof fetch;
};

export type GClientOptions = {
  path?: string;
  headers?: string;
};

export type GReturn<T> = {
  data: T;
  errors?: Error;
};

export type GGetParameters<Variables> = {
  variables?: Variables;
  fetch: typeof fetch;
};

export type GFetchReturnWithErrors<T> = Spread<[T, GFetchQueryDefault]>;

export class GFetch extends Object {
  public path: string;
  public headers?: { [key: string]: string }

  constructor(options: GClientOptions) {
    super();
    const { path, headers } = options;
    this.headers = headers;
    this.path = path;
    this.fetch = this.fetch.bind(this);
  }

  // * gFetch
  // This is a fetcher that returns a promise that resolves to a graphql response
  public async fetch<T>({
    queries,
    fetch,
  }: gFetchProperties | {} = {}): Promise<GFetchReturnWithErrors<T>> {
    let document: DocumentNode = addTypenameToDocument(queries[0].query);
    let documentString: string = stringifyDocument(document);
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
      headers: { "Content-Type": "application/json", ...this.headers },
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
