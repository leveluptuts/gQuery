import { getLatestSeries } from '$lib/listing/Series.gq';

export async function load({ fetch }) {
	await getLatestSeries({ fetch });
}
