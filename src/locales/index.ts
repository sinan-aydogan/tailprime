import { createI18n } from 'vue-i18n'
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'

interface ILocalizationFile {
  name: string,
  code: string,
  direction: string,
  messages?: any,
}

interface ILocalizationFilesImport {
  [key: string]:  {
    default: ILocalizationFile
  }
}
const locales: Ref<ILocalizationFile[]> = ref([])
const messages: Record<string, any> = reactive({})

const modules:ILocalizationFilesImport = import.meta.glob("./**/index.ts",  { eager: true });
for (const path in modules) {
  locales.value = [...locales.value, {
    name: modules[path].default.name,
    code: modules[path].default.code,
    direction: modules[path].default.direction,
  }];

  messages[modules[path].default.code] = modules[path].default.messages;
}

console.log(messages)

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  legacy: false,
  messages
})

export {
  i18n,
}