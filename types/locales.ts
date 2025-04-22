import { Badge } from '@/components'

export type Locales = 'en' | 'ko'

export type Pages = 'home' | 'nav'

export interface LocaleHome {
  job: string
  name: string
  introduce: string
  title: string
  time: string
  careers: {
    company: string
    'company-info': string
    position: string
    list: { title: string; contents: string[] }[]
  }[]
  portfolio: {
    title: string
    list: {
      title: string
      source: string
      badges: Badge[]
      description: string
      images: { url: string; alt: string }[]
      contents: string[]
    }[]
  }
}

export interface LocaleNav {
  home: string
  project: string
  blog: string
}
