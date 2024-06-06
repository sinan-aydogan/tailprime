import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

type TLayout = 'horizontal' | 'vertical'
type TDarkModeController = 'browser' | 'system' | 'manual'

export const useSystemSettingsStore = defineStore('systemSettingsStore', () => {
  const layout: Ref<TLayout> = ref('horizontal')
  const stickyNav: Ref<boolean> = ref(false)
  const darkMode: Ref<boolean> = ref(false)
  const darkModeController: Ref<TDarkModeController> = ref('browser')
  const isVisibleNav: Ref<boolean> = ref(true)

  return {
    layout,
    stickyNav,
    darkMode,
    darkModeController,
    isVisibleNav
  }
})