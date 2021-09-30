![gQuery](./gQuery.png)

# qQuery

## Not like jQuery. A GraphQL Fetcher & Cache for Svelte Kit

### UnderConstruction.gif

More information in this space soon. API is very much in flux rn.

### Preview

## 🪄 Magic Mode

Magic mode is the preferred way of using gQuery. Not because it's magical, but because it's easy.

### 1. Initialize G

```
export const g = new GFetch({
	path: Environment.apiURL //whatever your api url is here
})
```

### 2. Add GraphQL Codegen Plugin

docs coming soon

### 3. Run GraphQL Codegen

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

## Manual Mode

I guess if you want to do it this way you can.

### 1. Initialize

```
export const g = new GFetch({
	path: Environment.apiURL
})
```

### 2. Create Fetch Function

This is a function that run a gFetch. A gFetch is a simple graphql fetcher that accepts an array of queries and variables.
The result of this function is your data. If you don't want the caching, you can just use this data directly.

```
const seriesList = ({ variables}) =>
	g.fetch({
		queries: [{ query: SeriesListDoc, variables }],
	})

```

### 3. Cache and Fetch (optional)

If you want the caching into `$gCache`, you can pass your fetch func into the cacher and send the data to $gcache instead of using it directly.
Pass gQuery the query name, the fetch function and any variables you might have.

```
async function getSeriesList(variables) {
	await gQuery('seriesList', { query: seriesList, variables })
}
```

### 4. Use in Svelte Kit App

```
<script context="module" lang="ts">
	import { getSeriesList } from '../whatever'

	export async function load() {
		await getSeriesList({
			limit: 0
		})
		return {}
	}
</script>

<script lang="ts">
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
