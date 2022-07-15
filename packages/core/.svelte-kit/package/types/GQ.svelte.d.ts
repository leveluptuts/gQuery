import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        modules: any;
        devTools?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type GqProps = typeof __propDef.props;
export declare type GqEvents = typeof __propDef.events;
export declare type GqSlots = typeof __propDef.slots;
export default class Gq extends SvelteComponentTyped<GqProps, GqEvents, GqSlots> {
}
export {};
