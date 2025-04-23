import { ShieldsBadge } from '@/components'
import { LocaleHome } from '@/types'

interface Props {
  portfolio: LocaleHome['portfolio']['list'][number]
}

export function Portfolio({ portfolio }: Props) {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-2 mb-4">
        <a
          className={`
            w-fit text-3xl font-medium tracking-tighter text-blue-500 cursor-pointer select-none
            hover:text-blue-400
            active:text-blue-500
          `}
          href={portfolio.source}
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
          sm:grid sm:grid-cols-${portfolio.images.grid} sm:gap-4
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
