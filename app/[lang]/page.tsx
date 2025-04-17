import { getLocales } from '@/utils/getLocales'
import { LocaleHome, Locales } from '@/types'

interface Props {
  params: { lang: Locales }
}

export default async function Page({ params: { lang } }: Props) {
  const locale = await getLocales<LocaleHome>('home', lang)

  return (
    <section>
      <div className="flex mb-8 font-semibold tracking-tighter">
        <div className="flex flex-col">
          <h2 className="text-5xl mb-4">{locale.job}</h2>
          <h1 className="text-6xl">{locale.name}</h1>
        </div>
      </div>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
    </section>
  )
}
