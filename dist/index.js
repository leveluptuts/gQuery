import { writable, get } from "svelte/store";
const newGCache = () => {
    const { subscribe, update, set } = writable({});
    async function hydrate(newData) {
        update((old) => {
            return {
                ...old,
                ...newData,
            };
        });
    }
    return {
        subscribe,
        set,
        update,
        hydrate,
    };
};
export const gCache = newGCache();
export async function gQuery(typename, { query, variables }, { update } = {}) {
    const current = get(gCache);
    // Extremely Naive cache
    // Just checks to see if the data is there based on the query, if it is, don't
    // Hit the network again
    // if update option is present, then we want to update the cache
    if (!current?.[typename] || update) {
        const newData = await query({
            variables,
            fetch,
        });
        await gCache.hydrate(newData);
    }
}
export * from "./gFetch";
//# sourceMappingURL=index.js.map