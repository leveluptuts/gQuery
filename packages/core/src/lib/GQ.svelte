<script lang="ts">
	import { browser } from '$app/environment';

	import { getStores } from './getStores';
	import { Toy } from '@leveluptuts/svelte-toy';
	import { get } from 'svelte/store';

	export let modules;
	export let devTools = false;

	let stores = getStores(modules);
	let filteredStores = {};
	let filteredStoresData = {};

	stores.forEach((store) => {
		let tempStore = get(store[Object.keys(store)[0]]);
		if (tempStore?.status === 'LOADED') {
			filteredStores[Object.keys(store)[0]] = store[Object.keys(store)[0]];
			filteredStoresData[Object.keys(store)[0]] = get(store[Object.keys(store)[0]]);
		}
	});

	let SERVER_DATA_STRING = ``;

	if (!browser) {
		SERVER_DATA_STRING = `
	${'<scri'}pt>
	window.SERVER_DATA = 
	${JSON.stringify(filteredStoresData)}
	${'</scri'}pt>
	`;
	}
</script>

{#if !browser}
	{@html SERVER_DATA_STRING}
{/if}

{#if devTools}
	<Toy register={filteredStores} top="20%" nub="🎒" />
{/if}
