import { ShieldsBadge } from '@/components'
import { LocaleHome, Locales } from '@/types'

interface Props {
  lang: Locales
  portfolio: LocaleHome['portfolio']['list'][number]
}

export function Portfolio({ lang, portfolio }: Props) {
  const imageOption: Record<number, string> = {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3'
  }

  const column = imageOption[portfolio.images.grid] || 'sm:grid-cols-2'

  return (
    <div className="mb-14">
      <div className="flex flex-col gap-2 mb-4">
        <a
          className={`
            w-fit text-3xl font-medium tracking-tighter text-blue-500 cursor-pointer select-none
            hover:text-blue-400
            active:text-blue-500
          `}
          href={`/${lang}/${portfolio.source}`}
          target="_blank"
        >
          {portfolio.title}
        </a>
        <h5>{portfolio.description}</h5>
        <h6>{portfolio.motivate}</h6>
      </div>
      <ShieldsBadge badges={portfolio.badges} />
      <div
        className={`
          hidden
          sm:grid sm:gap-4 ${column}
        `}
      >
        {portfolio.images.list.map((image) => {
          return (
            <div key={image.alt} className="flex flex-col items-center">
              <img className="w-full h-full object-contain" src={image.url} alt={image.alt} />
              <p className="text-sm text-gray-600">{image.alt}</p>
            </div>
          )
        })}
      </div>
      <div className="prose">
        <ul>
          {portfolio.contents.map((content, index) => {
            return <li key={portfolio.title + index}>{content}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
