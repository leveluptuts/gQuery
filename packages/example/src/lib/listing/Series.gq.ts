import type * as Types from '../graphql/types.gq';

import { writable } from 'svelte/store';
import { g } from '$lib/g';
import type { GFetchReturnWithErrors, GGetParameters } from '@leveluptuts/g-query';
import gql from 'graphql-tag';
export type LatestSeriesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type LatestSeriesQuery = {
	__typename?: 'Query';
	latestPlaylist?:
		| { __typename?: 'Playlist'; _id: string; slug: string; title?: string | null | undefined }
		| null
		| undefined;
};

type FetchWrapperArgs<T> = {
	fetch: typeof fetch;
	variables?: T;
};

type SubscribeWrapperArgs<T> = {
	variables?: T;
};

interface CacheFunctionOptions {
	update?: boolean;
}

export const LatestSeriesDoc = gql`
	query latestSeries {
		latestPlaylist {
			_id
			slug
			title
		}
	}
`;

export const latestSeries = writable<GFetchReturnWithErrors<LatestSeriesQuery>>();

// Cached
export async function getLatestSeries(
	{ fetch, variables }: GGetParameters<LatestSeriesQueryVariables>,
	options?: CacheFunctionOptions
) {
	const data = await g.fetch<LatestSeriesQuery>({
		queries: [{ query: LatestSeriesDoc, variables }],
		fetch
	});
	await latestSeries.set({ ...data, errors: data?.errors, status: 'LOADED' });
	return data;
}
