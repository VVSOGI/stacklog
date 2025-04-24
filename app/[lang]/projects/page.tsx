import { getLocales } from '@/utils/getLocales'
import { LocaleProjects, Locales } from '@/types'

interface Props {
  params: { lang: Locales }
}
export default async function Page({ params: { lang } }: Props) {
  const locale = await getLocales<LocaleProjects>('projects', lang)
  return <div>Page</div>
}
