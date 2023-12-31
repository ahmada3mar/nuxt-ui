import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onIcon: {
        type: StringConstructor;
        default: () => any;
    };
    offIcon: {
        type: StringConstructor;
        default: () => any;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): any;
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
    name: import("vue").ComputedRef<any>;
    inputId: import("vue").ComputedRef<any>;
    active: import("vue").WritableComputedRef<boolean>;
    switchClass: import("vue").ComputedRef<string>;
    onIconClass: import("vue").ComputedRef<string>;
    offIconClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onIcon: {
        type: StringConstructor;
        default: () => any;
    };
    offIcon: {
        type: StringConstructor;
        default: () => any;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): any;
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
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    color: any;
    ui: Partial<any>;
    name: string;
    class: any;
    modelValue: boolean;
    disabled: boolean;
    onIcon: string;
    offIcon: string;
}, {}>;
export default _default;
