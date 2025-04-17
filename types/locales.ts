export type Locales = 'en' | 'ko'

export type Pages = 'home' | 'nav'

export interface LocaleHome {
  job: string
  name: string
}

export interface LocaleNav {
  home: string
  project: string
  blog: string
}
