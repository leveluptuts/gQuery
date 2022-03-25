<script lang="ts">
	import { getStores } from '@leveluptuts/g-query';
	import SvelteToy from '@leveluptuts/svelte-toy/Toy.svelte'; // npm install --save @leveluptuts/svelte-toy

	const modules = import.meta.globEager('./**/*.gq.ts'); // finds all gq.ts files in the current directory and subdirectories
	let stores = getStores(modules);
</script>

<SvelteToy register={stores} />
