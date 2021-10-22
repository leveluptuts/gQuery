export default function levelupViteCodegen(options: any): {
    name: string;
    buildStart(): Promise<void>;
    transform(src: any, id: any): void;
};
