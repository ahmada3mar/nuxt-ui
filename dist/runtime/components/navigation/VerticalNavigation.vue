<template>
  <nav :class="ui.wrapper" v-bind="attrs">
    <ULink
      v-for="(link, index) of links"
      v-slot="{ isActive }"
      :key="index"
      v-bind="omit(link, ['label', 'icon', 'iconClass', 'avatar', 'badge', 'click'])"
      :class="[ui.base, ui.padding, ui.width, ui.ring, ui.rounded, ui.font, ui.size]"
      :active-class="ui.active"
      :inactive-class="ui.inactive"
      @click="link.click"
      @keyup.enter="$event.target.blur()"
    >
      <slot name="avatar" :link="link" :is-active="isActive">
        <UAvatar
          v-if="link.avatar"
          v-bind="{ size: ui.avatar.size, ...link.avatar }"
          :class="[ui.avatar.base]"
        />
      </slot>
      <slot name="icon" :link="link" :is-active="isActive">
        <UIcon
          v-if="link.icon"
          :name="link.icon"
          :class="[ui.icon.base, isActive ? ui.icon.active : ui.icon.inactive, link.iconClass]"
        />
      </slot>
      <slot :link="link" :is-active="isActive">
        <span v-if="link.label" :class="ui.label">{{ link.label }}</span>
      </slot>
      <slot name="badge" :link="link" :is-active="isActive">
        <span v-if="link.badge" :class="[ui.badge.base, isActive ? ui.badge.active : ui.badge.inactive]">
          {{ link.badge }}
        </span>
      </slot>
    </ULink>
  </nav>
</template>

<script>
import { toRef, defineComponent } from "vue";
import UIcon from "../elements/Icon.vue";
import UAvatar from "../elements/Avatar.vue";
import ULink from "../elements/Link.vue";
import { useUI } from "../../composables/useUI";
import { mergeConfig, omit } from "../../utils";
import appConfig from "#build/app.config";
import { verticalNavigation } from "#ui/ui.config";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.verticalNavigation, verticalNavigation);
export default defineComponent({
  components: {
    UIcon,
    UAvatar,
    ULink
  },
  inheritAttrs: false,
  props: {
    links: {
      type: Array,
      default: () => []
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
  setup(props) {
    const { ui, attrs } = useUI("verticalNavigation", toRef(props, "ui"), config, toRef(props, "class"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      omit
    };
  }
});
</script>
