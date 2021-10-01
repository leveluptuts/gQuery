![gQuery](./gQuery.png)

# qQuery

## Not like jQuery. A GraphQL Fetcher & Cache for Svelte Kit

### UnderConstruction.gif

More information in this space soon. API is very much in flux rn.

### Preview

### 1. Initialize G

```
export const g = new GFetch({
	path: Environment.apiURL //whatever your api url is here
})
```

### 2. Add GraphQL Codegen Plugin

docs coming soon

### 3. Add Codegen Config

docs coming soon

### 4. Use that thang

```
<script context="module" lang="ts">
	// The generated function that fetches and caches
	import { getSeriesList } from '../whatever'

	export async function load() {
		// Runs the cache/fetch function populating $gCache before use.
		await getSeriesList({
			limit: 0
		})
		return {}
	}
</script>

<script lang="ts">
	// Cache becomes populated with data available for SSR
	import { gCache } from '@leveluptuts/gQuery'

	// $: console.log($gCache.seriesList)
</script>

```

## FAQ / WTF

### Q? How tf do I update the cache?

It's a Svelte Writable Store. So after a mutation you can quickly and easily manually update the cache.

### Q? Can't you update the cache magically for me after a mutation?

Maybe? If you want to be in charge of writing that bit, the door is open 😼

### Q? Why can't I use this yet?

It's changing too much rn, but will be available asap. Trust me, the sooner I get this done the better.
