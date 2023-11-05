
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['ui']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['ui']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['ui']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['ui']?: ModuleOptions }
}


export { accordion, alert, avatar, avatarGroup, badge, button, buttonGroup, card, checkbox, commandPalette, container, contextMenu, dropdown, formGroup, input, kbd, modal, notification, notifications, pagination, popover, radio, range, select, selectMenu, skeleton, slideover, table, tabs, textarea, toggle, tooltip, verticalNavigation } from './module'
