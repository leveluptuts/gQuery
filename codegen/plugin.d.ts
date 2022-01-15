export default function levelupViteCodegen({ schema, output, gPath }: {
    schema: any;
    output: any;
    gPath: any;
}): {
    name: string;
    buildStart(): Promise<void>;
    transform(src: any, id: any): any;
    resolveId(source: any): void;
    watchChange(id: any): void;
    generateBundle(opts: any): Promise<void>;
};
