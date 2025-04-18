import { getLocales } from '@/utils/getLocales'
import { LocaleHome, Locales } from '@/types'

interface Props {
  params: { lang: Locales }
}

export default async function Page({ params: { lang } }: Props) {
  const locale = await getLocales<LocaleHome>('home', lang)
  const introduces = locale.introduce.split('<br />')

  return (
    <section>
      <div className="flex mb-8 font-semibold tracking-tighter">
        <div className="flex flex-col">
          <h2 className="text-5xl mb-4">{locale.job}</h2>
          <h1 className="text-6xl">{locale.name}</h1>
        </div>
      </div>
      {introduces.map((introduce, index) => {
        return (
          <p key={'introduce' + index} className="text-md text-gray-800 whitespace-pre-line">
            {introduce}
          </p>
        )
      })}
    </section>
  )
}
