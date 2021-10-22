import {
  Location,
  DefinitionNode,
  DocumentNode,
  Kind,
  parse,
  print,
} from "graphql";
import { readable, writable } from "svelte/store";
import type { Readable } from "svelte/store";
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

interface WritableLocation {
  loc: Location | undefined;
}

export const stringifyDocument = (
  node: string | DefinitionNode | DocumentNode
): string => {
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

type gFetchProperties = {
  queries: GFetchQueries[];
  fetch: typeof fetch;
};

export type ApolloClientOptions = {
  path?: string;
};
export type ApolloClient = {
  path?: string;
};

export type GFetchReturn<T> = {
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

  constructor(options: ApolloClientOptions) {
    super();
    const { path } = options;
    this.path = path;
    this.fetch = this.fetch.bind(this);
    this.oFetch = this.oFetch.bind(this);
  }

  // * gFetch
  // This is a fetcher that returns a promise that resolves to a graphql response
  public async fetch<T>({
    queries,
    fetch,
  }: gFetchProperties): Promise<GFetchReturnWithErrors<T>> {
    // Get all the queries and transform the docs into strings
    // Fetching gql require them to be strings.
    if (!fetch && window) {
      fetch = window.fetch;
    }
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQueries),
    });

    // Gets the data back from the server
    const data = await res.json();

    return {
      ...data.data,
    } as GFetchReturnWithErrors<T>;
  }

  // * ogFetch
  // This function is a fetcher that returns a svelte readable subscription
  // This is to be used for client side fetching of data
  public oFetch<F>({
    queries,
  }: {
    queries: GFetchQueries[];
  }): Readable<GFetchReturnWithErrors<F>> {
    // 1. Build the store and initialize it as empty and error free
    const initial = new Map();
    // Creates a store that will be used to subscribe to the data
    const store = readable(initial, this.makeSubscribe(initial, queries));
    return store as unknown as Readable<GFetchReturnWithErrors<F>>;
  }

  // A dummy function that is used to make subscribe happy.
  private unsubscribe() {
    // Nothing to do in this case
  }

  // Part of ogFetch
  // Designed this way to work will with Svelte's readable store
  private makeSubscribe(data, queries) {
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
  private async fetchDataForSubscription(data, set, queries: GFetchQueries[]) {
    try {
      // Dispatch the request for the users
      // This code is ONLY run client side, so fetch comes globally from the browser
      const response = await this.fetch({ queries, fetch });
      set(response);
    } catch (error) {
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
