import { Locales, Pages } from '@/types'

export async function getLocales<T>(page: Pages, locale: Locales): Promise<T> {
  const data = require(`/locales/${page}/${locale}.json`)

  return data
}
