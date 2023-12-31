import { type PropType } from 'vue';
import type { ZodSchema } from 'zod';
import type { Schema as JoiSchema } from 'joi';
import type { ObjectSchema as YupObjectSchema } from 'yup';
import type { ObjectSchemaAsync as ValibotObjectSchema } from 'valibot';
import type { FormError, FormEventType } from '../../types/form';
declare const _default: import("vue").DefineComponent<{
    schema: {
        type: PropType<ZodSchema<any, import("zod").ZodTypeDef, any>> | PropType<YupObjectSchema<any, import("yup").AnyObject, any, "">> | PropType<JoiSchema> | PropType<ValibotObjectSchema<any>>;
        default: undefined;
    };
    state: {
        type: ObjectConstructor;
        required: true;
    };
    validate: {
        type: PropType<(state: any) => Promise<FormError[]>> | PropType<(state: any) => FormError[]>;
        default: () => never[];
    };
    validateOn: {
        type: PropType<FormEventType[]>;
        default: () => string[];
    };
}, {
    onSubmit: (event: SubmitEvent) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        type: PropType<ZodSchema<any, import("zod").ZodTypeDef, any>> | PropType<YupObjectSchema<any, import("yup").AnyObject, any, "">> | PropType<JoiSchema> | PropType<ValibotObjectSchema<any>>;
        default: undefined;
    };
    state: {
        type: ObjectConstructor;
        required: true;
    };
    validate: {
        type: PropType<(state: any) => Promise<FormError[]>> | PropType<(state: any) => FormError[]>;
        default: () => never[];
    };
    validateOn: {
        type: PropType<FormEventType[]>;
        default: () => string[];
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {
    schema: ZodSchema<any, import("zod").ZodTypeDef, any> | YupObjectSchema<any, import("yup").AnyObject, any, ""> | import("joi").AnySchema<any> | ValibotObjectSchema<any>;
    validate: ((state: any) => Promise<FormError[]>) | ((state: any) => FormError[]);
    validateOn: FormEventType[];
}, {}>;
export default _default;
