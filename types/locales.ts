export type Locales = 'en' | 'ko'

export type Pages = 'home' | 'nav'

export interface LocaleHome {
  job: string
  name: string
  introduce: string
  experience: {
    title: string
    time: string
    company: string
    'company-info': string
    position: string
    list: { title: string; contents: string }[]
  }[]
}

export interface LocaleNav {
  home: string
  project: string
  blog: string
}
