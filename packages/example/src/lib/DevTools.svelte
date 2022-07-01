<script lang="ts">
	import { getStores } from '@leveluptuts/g-query';
	import { Toy } from '@leveluptuts/svelte-toy'; // npm install --save @leveluptuts/svelte-toy

	const modules = import.meta.globEager('./**/*.gq.ts'); // finds all gq.ts files in the current directory and subdirectories
	let stores = getStores(modules);
</script>

<Toy register={stores} />
