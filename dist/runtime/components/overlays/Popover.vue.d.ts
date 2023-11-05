import type { PropType } from 'vue';
import type { PopperOptions } from '../../types';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<"click" | "hover">;
        default: string;
        validator: (value: string) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
    popover: any;
    trigger: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    container: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    containerStyle: import("vue").ComputedRef<{
        paddingTop: string;
        paddingBottom: string;
    } | {
        paddingTop?: undefined;
        paddingBottom?: undefined;
    }>;
    onMouseOver: () => void;
    onMouseLeave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: PropType<"click" | "hover">;
        default: string;
        validator: (value: string) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
    disabled: boolean;
    mode: "click" | "hover";
    openDelay: number;
    closeDelay: number;
}, {}>;
export default _default;
