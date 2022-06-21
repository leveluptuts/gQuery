![gQuery](./gQuery.png)

# gQuery

#### Not like jQuery. A different kind of GraphQL Client for Svelte Kit

A different thinking approach to GraphQL and Svelte with built in dev tools and a store first mentality.

- Automatic Type Generation
- Automatic store creation
- Full SSR Support with ease
- Focus on simplicity

Just write .graphql and go

For all docs and usage see: https://gquery.leveluptutorials.com

```html
<script context="module" lang="ts">
	// The generated function that fetches and caches
	import { getCurrentUser, currenUser } from './UserQueries.gq';
	// data available for ssr
	// correctly ts typed and all
	// $: console.log($currentUser.user) //data available for ssr

	export async function load({ fetch }) {
		// Runs the cache/fetch function populating $gCache before use.
		await getCurrentUser({
			variables: { limit: 0 },
			fetch
		});
		return {};
	}
</script>

<p>Current user: {$currentUser.user._id}</p>
```
