import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: null;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
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
    input: import("vue").Ref<HTMLInputElement | null>;
    isLeading: import("vue").ComputedRef<string | true>;
    isTrailing: import("vue").ComputedRef<string | true>;
    inputClass: import("vue").ComputedRef<string>;
    leadingIconName: import("vue").ComputedRef<string | undefined>;
    leadingIconClass: import("vue").ComputedRef<string>;
    leadingWrapperIconClass: import("vue").ComputedRef<string>;
    trailingIconName: import("vue").ComputedRef<string | undefined>;
    trailingIconClass: import("vue").ComputedRef<string>;
    trailingWrapperIconClass: import("vue").ComputedRef<string>;
    onInput: (event: InputEvent) => void;
    onBlur: (event: FocusEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "update:modelValue")[], "blur" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: null;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
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
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    icon: string;
    color: any;
    ui: Partial<any>;
    name: string;
    class: any;
    type: string;
    modelValue: string | number;
    loading: boolean;
    disabled: boolean;
    variant: any;
    required: boolean;
    size: string | number | symbol;
    placeholder: string;
    padded: boolean;
    loadingIcon: string;
    leadingIcon: string;
    trailingIcon: string;
    trailing: boolean;
    leading: boolean;
    autofocus: boolean;
    inputClass: string;
}, {}>;
export default _default;
