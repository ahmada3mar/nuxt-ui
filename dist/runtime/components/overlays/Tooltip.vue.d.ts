import type { PropType } from 'vue';
import type { PopperOptions } from '../../types';
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: null;
    };
    prevent: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortcuts: {
        type: PropType<string[]>;
        default: () => never[];
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
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
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    trigger: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    container: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    open: import("vue").Ref<boolean>;
    onMouseOver: () => void;
    onMouseLeave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: null;
    };
    prevent: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortcuts: {
        type: PropType<string[]>;
        default: () => never[];
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
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
    popper: PopperOptions;
    class: any;
    text: string;
    openDelay: number;
    closeDelay: number;
    prevent: boolean;
    shortcuts: string[];
}, {}>;
export default _default;
