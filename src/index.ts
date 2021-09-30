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

export async function gQuery(typename, { query, variables }) {
  const current = get(gCache);

  // Extremely Naive cache
  // Just checks to see if the data is there, if it is, don't
  // Hit the network again
  if (!current?.[typename]) {
    const newData = await query({
      variables,
      fetch,
    });

    await gCache.hydrate(newData);
  }
}
