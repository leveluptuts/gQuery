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

```javascript
svelte.config.js

import gQueryCodegen from '@leveluptuts/g-query/codegen'

...
	plugins: [
		gQueryCodegen({
			schema: './src/lib/graphql/schema.graphql', // path to schema, schema is required
			output: './src/lib/graphql', // Where you want the general schema types to output
			gPath: '$lib/config/g' //Path to g, created in step 1.
		})
	],
...
```

### 3. Add .graphql files

```graphql
UserQueries.graphql

query user {
	user {
		_id
	}
}


```

### 4. Use that thang

The code gen will find the file and spit out a file next to it. Named `FileName.gq.ts`
Using the above code, it would output `UserQueries.gq.ts`
This also gives us a `get` function for queries based on the query name. ie `getUser` for the above.

```svelte
<script context="module" lang="ts">
	// The generated function that fetches and caches
	import { getUser } from './UserQueries.gq.graphql'

	export async function load({fetch}) {
		// Runs the cache/fetch function populating $gCache before use.
		await getUser({
			variables: { limit: 0 },
			fetch
		})
		return {}
	}
</script>

<script lang="ts">
	// Cache becomes populated with data available for SSR
	import { user } from './UserQueries.gq.graphql'

	// $: console.log($user.user) //data available for ssr
</script>

```

## FAQ / WTF

### Q? How tf do I update the cache?

It's a Svelte Writable Store. So after a mutation you can quickly and easily manually update the cache.

```javascript
import { user, someMutation } from "./UserQueries.gq.graphql";

$user.user = null; // clears the cache

$user.user = await someMutation({ variables }); // if this returns the correct data
```

### Q? Can't you update the cache magically for me after a mutation?

Maybe? If you want to be in charge of writing that bit, the door is open 😼. My idea for the api would look something like this.

```javascript
import { user, someMutation } from "./UserQueries.gq.graphql";

await someMutation({ variables, store: user });
```

### Q? Why can't I use this yet?

IT'S GETTING CLOSER
