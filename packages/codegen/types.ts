import type { Types } from '@graphql-codegen/plugin-helpers';

export interface gQueryOptions {
	schema: Types.Schema;
	out: string;
	gPath: string;
	debug?: boolean;
}

export interface CreateStringOptions {
	name: string;
	op: string;
	opv: string;
	pascalName: string;
	config: gQueryOptions;
}
