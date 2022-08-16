import type * as Types from '../graphql/types.gq';

import { writable, get } from "svelte/store"
import { g } from '$lib/g'
import type { GFetchReturnWithErrors, GGetParameters, GSubscribeWrapperArgs, GCacheFunctionOptions  } from '@leveluptuts/g-query'
import gql from 'graphql-tag';
export type LatestSeriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LatestSeriesQuery = { __typename?: 'Query', latestPlaylist?: { __typename?: 'Playlist', _id: string, slug: string, title?: string | null } | null };


export const LatestSeriesDoc = gql`
    query latestSeries {
  latestPlaylist {
    _id
    slug
    title
  }
}
    `;

export const latestSeries = writable<GFetchReturnWithErrors<LatestSeriesQuery>>({
	errors: [],
	status: 'INITIAL',
})


export async function getLatestSeries({ fetch, variables }: GGetParameters<LatestSeriesQueryVariables>, { fresh = true, update = true }: GCacheFunctionOptions = {}) {
	

	let data = get(latestSeries)

	// If data doesn't already exist in cache, OR fresh is present
	// Fresh is by default false so that it defaults to pulling from cache
	// The user can pass in fresh: true to bypass the cache.

	if (data?.status !== 'LOADED' || fresh) {
		latestSeries.set({ ...data, status: 'LOADING' })
		data = await g.fetch<LatestSeriesQuery>({
			queries: [{ query: LatestSeriesDoc, variables }],
			fetch
		})
	}
	// Only update cache if options update which defaults to true
	if (update) {
		latestSeries.set({ ...data, errors: data?.errors, status: 'LOADED' })
	}
	return data
}
