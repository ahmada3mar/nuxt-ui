import type { WritableComputedRef, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    appear: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: PropType<"right" | "left">;
        default: string;
        validator: (value: string) => boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventClose: {
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
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    isOpen: WritableComputedRef<boolean>;
    transitionClass: import("vue").ComputedRef<any>;
    close: (value: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], "close" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    appear: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: PropType<"right" | "left">;
        default: string;
        validator: (value: string) => boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventClose: {
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
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    ui: Partial<any>;
    class: any;
    modelValue: boolean;
    appear: boolean;
    overlay: boolean;
    transition: boolean;
    preventClose: boolean;
    side: "right" | "left";
}, {}>;
export default _default;
