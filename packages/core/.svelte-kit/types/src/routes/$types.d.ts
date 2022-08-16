import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}
interface LayoutParams extends RouteParams {}

export type Errors = undefined;
export type PageData = null;
export type PageServerData = null;
export type LayoutData = null;
export type LayoutServerData = null;