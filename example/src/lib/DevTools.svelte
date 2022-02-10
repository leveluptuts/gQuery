<script lang="ts">
	import { getStores } from '@juanvillacortac/g-query';
	import SvelteToy from '@juanvillacortac/svelte-toy/Toy.svelte'; // npm install --save @juanvillacortac/svelte-toy

	const modules = import.meta.globEager('./**/*.gq.ts'); // finds all gq.ts files in the current directory and subdirectories
	let stores = getStores(modules);
</script>

<SvelteToy register={stores} />
