import type { PropType } from 'vue';
import type { Button } from '../../types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pageCount: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
        validate(value: any): boolean;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: () => any;
        validator(value: string): boolean;
    };
    activeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    inactiveButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    prevButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    nextButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    divider: {
        type: StringConstructor;
        default: string;
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
    currentPage: import("vue").WritableComputedRef<number>;
    pages: import("vue").ComputedRef<number[]>;
    displayedPages: import("vue").ComputedRef<(string | number)[]>;
    canGoPrev: import("vue").ComputedRef<boolean>;
    canGoNext: import("vue").ComputedRef<boolean>;
    onClickPrev: () => void;
    onClickNext: () => void;
    onClickPage: (page: number | string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pageCount: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
        validate(value: any): boolean;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: () => any;
        validator(value: string): boolean;
    };
    activeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    inactiveButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    prevButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    nextButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    divider: {
        type: StringConstructor;
        default: string;
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
    ui: Partial<any>;
    class: any;
    size: string | number | symbol;
    max: number;
    pageCount: number;
    activeButton: Button;
    inactiveButton: Button;
    prevButton: Button;
    nextButton: Button;
    divider: string;
}, {}>;
export default _default;
