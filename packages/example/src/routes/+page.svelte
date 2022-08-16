<script lang="ts">
	// import DevTools from '$lib/DevTools.svelte';
	import { latestSeries } from '$lib/listing/Series.gq';
</script>

<h1>
	{$latestSeries.latestPlaylist.title}
</h1>

<!-- <DevTools /> -->
