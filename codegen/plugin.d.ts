import type { Plugin } from "vite";
export default function levelupViteCodegen({ schema, out, gPath, documents, debug, }: {
    schema: any;
    out: any;
    gPath: any;
    documents?: string;
    debug?: boolean;
}): Plugin;
