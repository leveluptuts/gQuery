import type { CreateStringOptions } from './types';

// This is where the mutation code is generated
// We're grabbing the mutation name and using it as a string in the generated code
export function create_mutation_string({ name, op, opv, pascalName }: CreateStringOptions) {
	return `
export const ${name} = ({ variables }: GSubscribeWrapperArgs<${opv}>):
Promise<GFetchReturnWithErrors<${op}>> =>
	g.fetch<${op}>({
		queries: [{ query: ${pascalName}Doc, variables }],
		fetch,
	})
`;
}

// Todo
// Find a nice way to have certain queries auto update on mutations. Not sure required,
// but would be nice.
