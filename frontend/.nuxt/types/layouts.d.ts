import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "centered" | "default" | "plain"
declare module "/home/m14/Documents/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}