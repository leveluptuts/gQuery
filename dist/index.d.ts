export declare const gCache: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<{}>, invalidate?: (value?: {}) => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: {}) => void;
    update: (this: void, updater: import("svelte/store").Updater<{}>) => void;
    hydrate: (newData: any) => Promise<void>;
};
interface CacheFunctionOptions {
    update?: boolean;
}
export declare function gQuery(typename: any, { query, variables }: {
    query: any;
    variables: any;
}, { update }?: CacheFunctionOptions): Promise<void>;
export * from "./gFetch";
