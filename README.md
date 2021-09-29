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

## Manual Mode

I guess if you want to do it this way you can.

## gFetch

The graphql fetcher client.

### 1. Initialize

```
export const g = new GFetch({
	path: Environment.apiURL
})
```

Fetch

```
const seriesList = ({ variables}) =>
		g.fetch<SeriesListQuery>({
			queries: [{ query: SeriesListDoc, variables }],
		})

```

Cache and Fetch

```
export async function getSeriesList(variables) {
	await gQuery('seriesList', { query: seriesList, variables })
}
```

Use

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

### Q? Can't you update the cache magically for me?

Maybe? If you want to be in charge of writing that bit, the door is open 😼
