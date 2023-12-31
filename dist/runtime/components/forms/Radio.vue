<template>
  <div :class="ui.wrapper">
    <div class="flex items-center h-5">
      <input
        :id="inputId"
        v-model="pick"
        :name="name"
        :required="required"
        :value="value"
        :disabled="disabled"
        type="radio"
        class="form-radio"
        :class="inputClass"
        v-bind="attrs"
      >
    </div>
    <div v-if="label || $slots.label" class="ms-3 text-sm">
      <label :for="inputId" :class="ui.label">
        <slot name="label">{{ label }}</slot>
        <span v-if="required" :class="ui.required">*</span>
      </label>
      <p v-if="help" :class="ui.help">
        {{ help }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, toRef, defineComponent } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import { useUI } from "../../composables/useUI";
import { useFormGroup } from "../../composables/useFormGroup";
import { mergeConfig } from "../../utils";
import appConfig from "#build/app.config";
import { radio } from "#ui/ui.config";
import { uid } from "../../utils/uid";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.radio, radio);
export default defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      // A default value is needed here to bind the label
      default: () => uid()
    },
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("radio", toRef(props, "ui"), config, toRef(props, "class"));
    const { emitFormChange, color, name, inputId } = useFormGroup(props);
    const pick = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        if (value) {
          emitFormChange();
        }
      }
    });
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.background,
        ui.value.border,
        ui.value.ring.replaceAll("{color}", color.value),
        ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      inputId,
      attrs,
      pick,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass
    };
  }
});
</script>
