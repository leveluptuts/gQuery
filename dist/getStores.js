export function getStores(modules) {
    return Object.keys(modules)
        .map((key) => {
        let filteredMods = Object.keys(modules[key])
            .map((nKey) => {
            if (typeof modules[key][nKey] === "object" &&
                !nKey.includes("Doc") &&
                modules[key][nKey].hasOwnProperty("subscribe")) {
                let temp = {};
                temp[nKey] = modules[key][nKey];
                return temp;
            }
        })
            .filter(Boolean);
        return filteredMods;
    })
        .reduce((acc, val) => acc.concat(val), []);
}
//# sourceMappingURL=getStores.js.map