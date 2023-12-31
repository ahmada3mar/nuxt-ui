import type { PropType } from 'vue';
import { omit } from '../../utils';
import type { AccordionItem } from '../../types';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<AccordionItem[]>;
        default: () => never[];
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    openIcon: {
        type: StringConstructor;
        default: () => any;
    };
    closeIcon: {
        type: StringConstructor;
        default: () => any;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}, {
    ui: import("vue").ComputedRef<any>;
    uiButton: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    buttonRefs: import("vue").Ref<Function[]>;
    closeOthers: (currentIndex: number) => void;
    omit: typeof omit;
    onEnter: (el: HTMLElement, done: any) => void;
    onBeforeLeave: (el: HTMLElement) => void;
    onAfterEnter: (el: HTMLElement) => void;
    onLeave: (el: HTMLElement, done: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<AccordionItem[]>;
        default: () => never[];
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    openIcon: {
        type: StringConstructor;
        default: () => any;
    };
    closeIcon: {
        type: StringConstructor;
        default: () => any;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}>>, {
    ui: Partial<any>;
    class: any;
    defaultOpen: boolean;
    items: AccordionItem[];
    openIcon: string;
    closeIcon: string;
    multiple: boolean;
}, {}>;
export default _default;
