export type Locales = 'en' | 'ko'

export type Pages = 'home' | 'nav'

export interface LocaleHome {
  job: string
  name: string
  introduce: string
}

export interface LocaleNav {
  home: string
  project: string
  blog: string
}
