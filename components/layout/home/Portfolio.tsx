import { ShieldsBadge } from '@/components'
import { LocaleHome } from '@/types'

interface Props {
  portfolio: LocaleHome['portfolio']['list'][number]
}

export function Portfolio({ portfolio }: Props) {
  return (
    <div>
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
        <h6>{portfolio.description}</h6>
        <ShieldsBadge badges={portfolio.badges} />
      </div>
      <div
        className={`
          grid grid-cols-1
          md:grid-cols-2
        `}
      >
        {portfolio.images.map((image) => {
          return (
            <div key={image.alt} className="flex flex-col items-center">
              <img src={image.url} alt={image.alt} />
              <p className="text-sm text-gray-600">{image.alt}</p>
            </div>
          )
        })}
      </div>
      <div className="prose">
        <ul>
          {portfolio.contents.map((content, index) => {
            return <li className={portfolio.title + index}>{content}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
