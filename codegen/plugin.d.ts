import type { Plugin } from "vite";
export interface GQueryGenerateOptions {
    schema: string;
    output: string;
    gPath: string;
    debug?: boolean;
}
export default function levelupViteCodegen({ schema, output, gPath, debug }: GQueryGenerateOptions): Plugin;
