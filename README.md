# qQuery

## Not like jQuery. A GraphQL Fetcher & Cache for Svelte Kit

### UnderConstruction.gif

More information in this space soon. API is very much in flux rn.

### Preview

## gFetch

The graphql fetcher client.

Initialize

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
