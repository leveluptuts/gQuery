<script context="module" lang="ts">
	import DevTools from '$lib/DevTools.svelte';
	import { getLatestSeries, latestSeries } from '$lib/listing/Series.gq';

	export async function load({ fetch }) {
		await getLatestSeries({ fetch });
		return {};
	}
</script>

<h1>
	{$latestSeries.latestPlaylist.title}
</h1>

<DevTools />
