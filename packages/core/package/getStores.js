export function getStores(modules) {
    return Object.keys(modules)
        .map((key) => {
        const filteredMods = Object.keys(modules[key])
            .map((nKey) => {
            if (typeof modules[key][nKey] === 'object' &&
                !nKey.includes('Doc') &&
                modules[key][nKey].hasOwnProperty('subscribe')) {
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
    if (window === null || window === void 0 ? void 0 : window.SERVER_DATA) {
        const mods = getStores(modules);
        mods.forEach((mod) => {
            mod[Object.keys(mod)[0]].set(window === null || window === void 0 ? void 0 : window.SERVER_DATA[Object.keys(mod)[0]]);
        });
    }
}
