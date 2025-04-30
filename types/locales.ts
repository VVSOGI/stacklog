import { Badge } from '@/components'

export type Locales = 'en' | 'ko'

export type Pages = 'home' | 'nav' | 'projects'

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
    reason: string
    list: {
      title: string
      source: string
      motivate: string
      badges: Badge[]
      description: string
      images: { grid: number; list: { url: string; alt: string }[] }
      contents: string[]
    }[]
  }
}

export interface LocaleProjects {
  title: string
  list: {
    page: string
    title: string
    source: string
    motivate: string
    badges: Badge[]
    description: string
    banner: string
    createdAt: string
  }[]
}

export interface LocaleNav {
  home: string
  project: string
  blog: string
}
