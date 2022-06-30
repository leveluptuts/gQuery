export function create_query_string({ name, op, opv, pascalName, config }) {
    return `
export const ${name} = writable<GFetchReturnWithErrors<${op}>>({
	errors: [],
	status: 'INITIAL',
})


export async function get${pascalName}({ fetch, variables }: GGetParameters<${opv}>, { fresh: false, update: true }?: GCacheFunctionOptions) {
	${config.debug ? 'console.log(`❓ gFetch Debug - Fetching fresh data from get${pascalName}`)' : ''}

	let data = get(${name})

	// If data doesn't already exist in cache, OR fresh is present
	// Fresh is by default false so that it defaults to pulling from cache
	// The user can pass in fresh: true to bypass the cache.

	if (data?.status === 'INITIAL' || options.fresh) {
		${name}.set({ ...data, status: 'LOADING' })
		data = await g.fetch<${op}>({
			queries: [{ query: ${pascalName}Doc, variables }],
			fetch
		})
	}
	// Only update cache if options update which defaults to true
	if (options.update) {
		${name}.set({ ...data, errors: data?.errors, status: 'LOADED' })
	}
	return data
}
`;
}
// export const postUser = writable<GFetchReturnWithErrors<PostUserQuery>>({
// 	errors: [],
// 	status: 'INITIAL'
// });
// // Cached
// export async function getPostUser(
// 	{ fetch, variables }: GGetParameters<PostUserQueryVariables>,
// 	options?: CacheFunctionOptions
// ) {
// 	// Send query
// 	let data = get(postUser);
// 	// If data doesn't already exist in cache, OR fresh is present
// 	if (data?.status === 'INITIAL' || options.fresh) {
// 		postUser.set({ ...data, status: 'LOADING' });
// 		data = await g.fetch<PostUserQuery>({
// 			queries: [{ query: PostUserDoc, variables }],
// 			fetch
// 		});
// 	}
// 	postUser.set({ ...data, errors: data?.errors, status: 'LOADED' });
// 	return data;
// }
// export const updateSocialCard = ({
// 	variables
// }: SubscribeWrapperArgs<UpdateSocialCardMutationVariables>): Promise<
// 	GFetchReturnWithErrors<UpdateSocialCardMutation>
// > =>
// 	g.fetch<UpdateSocialCardMutation>({
// 		queries: [{ query: UpdateSocialCardDoc, variables }],
// 		fetch
// 	});
// TODO
// Check local storage for query name first
// if localStorage exists
// const data = localStorage.getItem(${name})
// if data exists within local storage
// skip data fetch, set into object
// let data = check_local_storage()
//
//# sourceMappingURL=query_template.js.map