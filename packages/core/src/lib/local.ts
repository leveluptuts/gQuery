export function check_local_storage(name: string) {
	// Check to see if local storage exists
	if (window?.localStorage) {
		// const data = localStorage.getItem(name)
		// return data;
	}
	return null;
}
