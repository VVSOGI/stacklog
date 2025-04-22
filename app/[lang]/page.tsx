import { getLocales } from '@/utils/getLocales'
import { LocaleHome, Locales } from '@/types'
import { Badge, Career, Portfolio } from '@/components'

interface Props {
  params: { lang: Locales }
}

export default async function Page({ params: { lang } }: Props) {
  const locale = await getLocales<LocaleHome>('home', lang)
  const introduces = locale.introduce.split('<br />')
  const dokeBadges: Badge[] = ['nextjs', 'nestjs', 'typescript', 'jest', 'docker', 'shell']

  return (
    <section className="flex flex-col gap-8">
      <div className="mt-4">
        <div className="flex flex-col gap-2 h1">
          <h1>{locale.job}</h1>
          <h1>{locale.name}</h1>
        </div>
        <div className="my-8">
          {introduces.map((introduce, index) => {
            return <p key={'introduce' + index}>{introduce}</p>
          })}
        </div>
      </div>

      <div>
        <div className="flex items-end gap-4 mb-8">
          <h2>{locale.title}</h2>
          <h5>{locale.time}</h5>
        </div>
        {locale.careers.map((experience) => {
          return <Career key={experience.company} info={experience} />
        })}
      </div>

      <div>
        <h2 className="mb-4">{locale.portfolio.title}</h2>
        {locale.portfolio.list.map((portfolio) => {
          return <Portfolio portfolio={portfolio} />
        })}
      </div>
    </section>
  )
}
