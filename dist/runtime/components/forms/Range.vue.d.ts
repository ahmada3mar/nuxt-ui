import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    id: {
        type: StringConstructor;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: null;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): any;
    };
    inputClass: {
        type: StringConstructor;
        default: null;
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
    value: import("vue").WritableComputedRef<number>;
    wrapperClass: import("vue").ComputedRef<string>;
    inputClass: import("vue").ComputedRef<string>;
    thumbClass: import("vue").ComputedRef<string>;
    trackClass: import("vue").ComputedRef<string>;
    progressClass: import("vue").ComputedRef<string>;
    progressStyle: import("vue").ComputedRef<{
        width: string;
    }>;
    onChange: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    id: {
        type: StringConstructor;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: null;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): any;
    };
    inputClass: {
        type: StringConstructor;
        default: null;
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
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    color: any;
    ui: Partial<any>;
    name: string;
    class: any;
    modelValue: number;
    disabled: boolean;
    size: string | number | symbol;
    max: number;
    inputClass: string;
    min: number;
    step: number;
}, {}>;
export default _default;
