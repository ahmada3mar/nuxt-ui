<template>
  <div :class="alertClass" v-bind="attrs">
    <div class="flex gap-3" :class="{ 'items-start': (description || $slots.description), 'items-center': !description && !$slots.description }">
      <UIcon v-if="icon" :name="icon" :class="ui.icon.base" />
      <UAvatar v-if="avatar" v-bind="{ size: ui.avatar.size, ...avatar }" :class="ui.avatar.base" />

      <div class="w-0 flex-1">
        <p :class="ui.title">
          <slot name="title" :title="title">
            {{ title }}
          </slot>
        </p>
        <p v-if="description || $slots.description" :class="ui.description">
          <slot name="description" :description="description">
            {{ description }}
          </slot>
        </p>

        <div v-if="(description || $slots.description) && actions.length" class="mt-3 flex items-center gap-2">
          <UButton v-for="(action, index) of actions" :key="index" v-bind="{ ...ui.default.actionButton, ...action }" @click.stop="action.click" />
        </div>
      </div>
      <div class="flex-shrink-0 flex items-center gap-3">
        <div v-if="!description && !$slots.description && actions.length" class="flex items-center gap-2">
          <UButton v-for="(action, index) of actions" :key="index" v-bind="{ ...ui.default.actionButton, ...action }" @click.stop="action.click" />
        </div>

        <UButton v-if="closeButton" aria-label="Close" v-bind="{ ...ui.default.closeButton, ...closeButton }" @click.stop="$emit('close')" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, toRef, defineComponent } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import UIcon from "../elements/Icon.vue";
import UAvatar from "../elements/Avatar.vue";
import UButton from "../elements/Button.vue";
import { useUI } from "../../composables/useUI";
import { mergeConfig } from "../../utils";
import appConfig from "#build/app.config";
import { alert } from "#ui/ui.config";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.alert, alert);
export default defineComponent({
  components: {
    UIcon,
    UAvatar,
    UButton
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config.default.closeButton
    },
    actions: {
      type: Array,
      default: () => []
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
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  emits: ["close"],
  setup(props) {
    const { ui, attrs } = useUI("alert", toRef(props, "ui"), config);
    const alertClass = computed(() => {
      const variant = ui.value.color?.[props.color]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.rounded,
        ui.value.shadow,
        ui.value.padding,
        variant?.replaceAll("{color}", props.color)
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      alertClass
    };
  }
});
</script>
