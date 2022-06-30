export function check_local_storage(name) {
    // Check to see if local storage exists
    if (window === null || window === void 0 ? void 0 : window.localStorage) {
        // const data = localStorage.getItem(name)
        // return data;
    }
    return null;
}
