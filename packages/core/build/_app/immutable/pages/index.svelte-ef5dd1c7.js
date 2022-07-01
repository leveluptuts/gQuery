import{S as u,i as c,s as h,e as g,c as d,a as p,d as o,b as m,g as f,n as r}from"../chunks/index-824779f0.js";import{m as l,P as s}from"../chunks/prism-5a0c904a.js";var y=`#### Not like jQuery. A different kind of GraphQL Client for Svelte Kit

## How to use

### 0. Install

\`\`\`shell
npm install --save @leveluptuts/g-query graphql-tag
\`\`\`

### 1. Initialize G

\`\`\`javascript
// src/lib/config/g.ts

export const g = new GFetch({
	path: 'https://yourapiurl.com/graphql' //whatever your api url is here
	// More config options coming, for now this is just path to your graphql api
});
\`\`\`

> \u{1F440}: This expects that you have a Graphql API already running. This can be any valid graphql api url.

### 2. Add GraphQL Codegen Plugin to Svelte Kit

\`\`\`javascript
// svelte.config.js

import gQueryCodegen from '@leveluptuts/g-query/codegen'

...
vite: {
	plugins: [
		gQueryCodegen({
			// Required
			// schema: 'http://localhost:3001/graphql' // this can also be a url to a graphql api
			schema: './src/lib/graphql/schema.graphql', // path to schema, schema is required
			out: './src/lib/graphql', // Where you want the general schema types to output
			gPath: '$lib/config/g' // Path to g, created in step 1.
			// Optional
			debug: false  // boolean, this adds logging for gq files deleted and on codegen
		})
	],
}
...
\`\`\`

### 3. Add .graphql files

\`\`\`graphql
// UserQueries.graphql

query currentUser {
	user {
		_id
	}
}
\`\`\`

### 4. Use it

Run your dev process. Because gQuery uses a plugin to control the codegen, it will remove all .gq files then regenerate anytime there is a change to .graphql files. The codegen will find the file and spit out a file next to it. Named

\`\`\`
FileName.gq.ts
\`\`\`

Using the above code, it would output

\`\`\`
UserQueries.gq.ts
\`\`\`

This also gives us a "get" function for queries based on the query name. ie "getUser" for the above.

\`\`\`html
<script context="module" lang="ts">
	// The generated function that fetches and caches
	import { getCurrentUser } from './UserQueries.gq';

	export async function load({ fetch }) {
		// Runs the cache/fetch function populating $currentUser before use.
		await getCurrentUser({
			variables: { limit: 0 },
			fetch // Don't forget to pass fetch for ssr
		});
		return {};
	}
<\/script>

<script lang="ts">
	// Cache becomes populated with data available for SSR
	import { user } from './UserQueries.gq';

	// $: console.log($user.user) //data available for ssr
<\/script>
\`\`\`

---

## Examples

All of these examples assume a successful codegen run.

### Query

\`\`\`html
<script context="module" lang="ts">
	// The generated function that fetches and caches
	import { getCurrentUser } from './UserQueries.gq';

	export async function load({ fetch }) {
		// Runs the cache/fetch function populating $gCache before use.
		await getCurrentUser({
			variables: { limit: 0 },
			fetch
		});
		return {};
	}
<\/script>

<script lang="ts">
	// Cache becomes populated with data available for SSR
	import { currenUser } from './UserQueries.gq';

	// data available for ssr
	// correctly ts typed and all
	// $: console.log($currentUser.user) //data available for ssr
<\/script>
\`\`\`

### Mutation

\`\`\`graphql
// UserQueries.graphql

mutation makeUserAdmin($_id: ID!) {
  makeUserAdmin(_id: $_id) {
	  _id
	  userName
  }
}
\`\`\`

\`\`\`html
<script lang="ts">
	// The generated function that hits mutation
	import { makeUserAdmin } from './UserQueries.gq';

	async function makeAdmin() {
		// Runs the cache/fetch function populating $gCache before use.
		const { makeUserAdmin } = await makeUserAdmin({
			variables: { _id: 'someCoolUsersId' },
			fetch
		});
		// Want to update the cache?
		// All gQuery objects are writable stores so you can just update like this
		$currentUser.user = makeUserAdmin;
		// OR
		// You can just re-call the original query
		// await getCurrentUser()
	}
<\/script>

<button on:click="{makeAdmin}">Make Cool User Admin</button>
\`\`\`

### Subscription

Not available yet, but should be fairly trivial with the current API, I just don't use them much, so I haven't invested the time. This code is well documented, so feel free to submit a PR.

---

## Dev Tools

We have some really neat dev tools available for gQuery via

\`\`\`shell
@leveluptuts/svelte-toy
\`\`\`

These dev tools live in your project and can easily be added by making a new component. You can name it whatever you would like.

\`\`\`html
// DevTools.svelte

<script lang="ts">
	import { getStores } from '@leveluptuts/g-query';
	import { Toy } from '@leveluptuts/svelte-toy'; // npm install --save @leveluptuts/svelte-toy

	const modules = import.meta.globEager('./**/*.gq.ts'); // finds all gq.ts files in the current directory and subdirectories
	let stores = getStores(modules);
<\/script>

<Toy register="{stores}" />
\`\`\`

Then you can use them by adding to your project easily. We hide ours in production and you probably should as well.

\`\`\`html
<!-- \u{1F440} isDevelopment isn't something that exists without you making it. -->
{#if isDevelopment}
<DevTools />
{/if}
\`\`\`

---

## Codegen In Depth

This section isn't required to read, but if you are the curious type, this will give you some insight into how codegen plays a role in g-query and what our output looks like.

We use the wonderful https://www.graphql-code-generator.com/ as the basis for all of our codegen.

### What is actually generated?

Here is an example. In this example we have a file AdminTags.graphql that contains 1 query and 1 mutations

AdminTags.graphql

\`\`\`graphql
query adminTags {
	tags {
		_id
		name
	}
}

mutation deleteTag($_id: ID!) {
	deleteTag(_id: $_id)
}
\`\`\`

From this, gQuery will generate a file named

\`\`\`shell
AdminTags.gq.ts
\`\`\`

That will contain the following

\`\`\`javascript
import type * as Types from '../../graphql/types.gq';
import { writable } from 'svelte/store';
import { g } from '$lib/config/g';
import type { GFetchReturnWithErrors, GGetParameters } from '@leveluptuts/g-query';
import gql from 'graphql-tag';

export type AdminTagsQueryVariables = Types.Exact<{ [key: string]: never }>;
export type AdminTagsQuery = {
	__typename?: 'Query';
	tags?:
		| Array<{ __typename?: 'Tag'; _id: string; name: string } | null | undefined>
		| null
		| undefined;
};
export type DeleteTagMutationVariables = Types.Exact<{
	_id: Types.Scalars['ID'];
}>;
export type DeleteTagMutation = {
	__typename?: 'Mutation';
	deleteTag?: boolean | null | undefined;
};

export const AdminTagsDoc = gql\`
	query adminTags {
		tags {
			_id
			name
		}
	}
\`;
export const DeleteTagDoc = gql\`
	mutation deleteTag($_id: ID!) {
		deleteTag(_id: $_id)
	}
\`;

export const adminTags = writable<GFetchReturnWithErrors<AdminTagsQuery>>();

// Cached
export async function getAdminTags(
	{ fetch, variables }: GGetParameters<AdminTagsQueryVariables>,
	options?: CacheFunctionOptions
) {
	const data = await g.fetch<AdminTagsQuery>({
		queries: [{ query: AdminTagsDoc, variables }],
		fetch
	});
	await adminTags.set({
		...data,
		errors: data?.errors,
		status: 'LOADED'
	});
	return data;
}

export const deleteTag = ({
	variables
}: SubscribeWrapperArgs<DeleteTagMutationVariables>): Promise<
	GFetchReturnWithErrors<DeleteTagMutation>
> =>
	g.fetch<DeleteTagMutation>({
		queries: [{ query: DeleteTagDoc, variables }],
		fetch
	});
\`\`\`

You can see from this, we have all the types we would need as well as our two usable functions and our Svelte writable.

---

## FAQ / WTF

### Q? How tf do I update the cache?

It's a Svelte Writable Store. So after a mutation you can quickly and easily manually update the cache.

\`\`\`javascript
import { user, someMutation } from './UserQueries.gq';

$user.user = null; // clears the cache object

$user.user = await someMutation({ variables }); // if this returns the correct data
\`\`\`

### Q? Can't you update the cache magically for me after a mutation?

Maybe? If you want to be in charge of writing that bit, the door is open \u{1F63C}. My idea for the api would look something like this.
This isn't real code, but maybe a way to do it. Who knows, I'm open to anything.

\`\`\`javascript
import { user, someMutation } from './UserQueries.gq';

await someMutation({ variables, store: user });
\`\`\`

### Q? How is this different than X, Y, Z library?

We're dogfooding / using this lib to build LevelUpTutorials.com. It's not intended to be perfect for every usecase, but effortless for ones like Level Up. There are similar libraries that have taken inspiration from gQuery, but only on gQuery. Check out our API and if it looks nice to you, give it a try. We plan on keeping this thing lightweight and effortless. Often imitated, never duplicated. Stay fresh.
`;function v(i){let t,e=l(y)+"";return{c(){t=g("div"),this.h()},l(n){t=d(n,"DIV",{class:!0});var a=p(t);a.forEach(o),this.h()},h(){m(t,"class","markdown-render")},m(n,a){f(n,t,a),t.innerHTML=e},p:r,i:r,o:r,d(n){n&&o(t)}}}function b(i){return l.setOptions({highlight:(t,e)=>s.languages[e]?s.highlight(t,s.languages[e||"markup"],e):t}),[]}class T extends u{constructor(t){super(),c(this,t,b,v,h,{})}}export{T as default};
