import { getLocales } from '@/utils/getLocales'
import { LocaleHome, Locales } from '@/types'
import { Experience } from '@/components'

interface Props {
  params: { lang: Locales }
}

export default async function Page({ params: { lang } }: Props) {
  const locale = await getLocales<LocaleHome>('home', lang)
  const introduces = locale.introduce.split('<br />')

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
        <div className="flex gap-4 items-end mb-8">
          <h1>{locale.title}</h1>
          <h5>{locale.time}</h5>
        </div>
        {locale.careers.map((experience) => {
          return <Experience key={experience.company} info={experience} />
        })}
      </div>
    </section>
  )
}
