<template>
  <ULink :type="type" :disabled="disabled || loading" :class="buttonClass" v-bind="attrs">
    <slot name="leading" :disabled="disabled" :loading="loading">
      <UIcon v-if="isLeading && leadingIconName" :name="leadingIconName" :class="leadingIconClass" aria-hidden="true" />
    </slot>

    <slot>
      <span v-if="label" :class="[truncate ? 'text-left break-all line-clamp-1' : '']">
        {{ label }}
      </span>
    </slot>

    <slot name="trailing" :disabled="disabled" :loading="loading">
      <UIcon v-if="isTrailing && trailingIconName" :name="trailingIconName" :class="trailingIconClass" aria-hidden="true" />
    </slot>
  </ULink>
</template>

<script>
import { computed, defineComponent, toRef } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import UIcon from "../elements/Icon.vue";
import ULink from "../elements/Link.vue";
import { useUI } from "../../composables/useUI";
import { mergeConfig } from "../../utils";
import appConfig from "#build/app.config";
import { button } from "#ui/ui.config";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
export default defineComponent({
  components: {
    UIcon,
    ULink
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config.default.size,
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
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
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
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config);
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      const variant = ui.value.color?.[props.color]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        ui.value.rounded,
        ui.value.size[props.size],
        ui.value.gap[props.size],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][props.size],
        variant?.replaceAll("{color}", props.color),
        props.block ? "w-full flex justify-center items-center" : "inline-flex items-center"
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size],
        props.loading && "animate-spin"
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size],
        props.loading && !isLeading.value && "animate-spin"
      );
    });
    return {
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass
    };
  }
});
</script>
