<template>
  <div :class="ui.wrapper">
    <textarea
      :id="inputId"
      ref="textarea"
      :value="modelValue"
      :name="name"
      :rows="rows"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      class="form-textarea"
      :class="textareaClass"
      v-bind="attrs"
      @input="onInput"
      @blur="onBlur"
    />
  </div>
</template>

<script>
import { ref, computed, toRef, watch, onMounted, nextTick, defineComponent } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import { useUI } from "../../composables/useUI";
import { useFormGroup } from "../../composables/useFormGroup";
import { mergeConfig } from "../../utils";
import appConfig from "#build/app.config";
import { textarea } from "#ui/ui.config";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.textarea, textarea);
export default defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    autoresize: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    resize: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    textareaClass: {
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
  emits: ["update:modelValue", "blur"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("textarea", toRef(props, "ui"), config, toRef(props, "class"));
    const { emitFormBlur, emitFormInput, inputId, color, size, name } = useFormGroup(props, config);
    const textarea2 = ref(null);
    const autoFocus = () => {
      if (props.autofocus) {
        textarea2.value?.focus();
      }
    };
    const autoResize = () => {
      if (props.autoresize) {
        if (!textarea2.value) {
          return;
        }
        textarea2.value.rows = props.rows;
        const styles = window.getComputedStyle(textarea2.value);
        const paddingTop = parseInt(styles.paddingTop);
        const paddingBottom = parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = parseInt(styles.lineHeight);
        const { scrollHeight } = textarea2.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textarea2.value.rows = newRows;
        }
      }
    };
    const onInput = (event) => {
      autoResize();
      emit("update:modelValue", event.target.value);
      emitFormInput();
    };
    const onBlur = (event) => {
      emit("blur", event);
      emitFormBlur();
    };
    onMounted(() => {
      setTimeout(() => {
        autoFocus();
      }, 100);
    });
    watch(() => props.modelValue, () => {
      nextTick(autoResize);
    });
    onMounted(() => {
      setTimeout(() => {
        autoFocus();
        autoResize();
      }, 100);
    });
    const textareaClass = computed(() => {
      const variant = ui.value.color?.[color.value]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant?.replaceAll("{color}", color.value),
        !props.resize && "resize-none"
      ), props.textareaClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      textarea: textarea2,
      // eslint-disable-next-line vue/no-dupe-keys
      textareaClass,
      onInput,
      onBlur
    };
  }
});
</script>
