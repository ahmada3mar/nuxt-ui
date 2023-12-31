import type { PropType } from 'vue';
import type { Group } from '../../types';
declare const _default: import("vue").DefineComponent<{
    group: {
        type: PropType<Group>;
        required: true;
    };
    query: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
        type: StringConstructor;
        required: true;
    };
    commandAttribute: {
        type: StringConstructor;
        required: true;
    };
    selectedIcon: {
        type: StringConstructor;
        required: true;
    };
    ui: {
        type: PropType<any>;
        required: true;
    };
}, {
    label: import("vue").ComputedRef<any>;
    highlight: (text: string, { indices, value }: {
        indices: number[][];
        value: string;
    }) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    group: {
        type: PropType<Group>;
        required: true;
    };
    query: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
        type: StringConstructor;
        required: true;
    };
    commandAttribute: {
        type: StringConstructor;
        required: true;
    };
    selectedIcon: {
        type: StringConstructor;
        required: true;
    };
    ui: {
        type: PropType<any>;
        required: true;
    };
}>>, {
    query: string;
}, {}>;
export default _default;
