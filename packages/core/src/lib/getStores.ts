import type { Writable } from 'svelte/store';

export function getStores(modules): Writable<any>[] {
	return Object.keys(modules)
		.map((key) => {
			const filteredMods = Object.keys(modules[key])
				.map((nKey) => {
					if (
						typeof modules[key][nKey] === 'object' &&
						!nKey.includes('Doc') &&
						modules[key][nKey].hasOwnProperty('subscribe')
					) {
						const temp = {};
						temp[nKey] = modules[key][nKey];
						return temp;
					}
				})
				.filter(Boolean);
			return filteredMods;
		})
		.reduce((acc, val) => acc.concat(val), []);
}

export function replenishStores(modules) {
	if (window?.SERVER_DATA) {
		const mods: Writable<any>[] = getStores(modules);
		mods.forEach((mod) => {
			mod[Object.keys(mod)[0]].set(window?.SERVER_DATA[Object.keys(mod)[0]]);
		});
	}
}
