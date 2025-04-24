import { getLocales } from '@/utils/getLocales'
import { LocaleProjects, Locales } from '@/types'
import { ShieldsBadge } from '@/components'

interface Props {
  params: { lang: Locales }
}
export default async function Page({ params: { lang } }: Props) {
  const locale = await getLocales<LocaleProjects>('projects', lang)

  return (
    <div>
      <div
        className={`
          grid grid-cols-1 gap-4
          sm:grid-cols-2
        `}
      >
        {locale.list.map((project) => {
          return (
            <div className="h-fit flex flex-col gap-2 pb-8 cursor-pointer">
              <img className="object-contain w-full h-[300px]" src={project.images.list[0].url} alt={project.images.list[0].alt} />
              <div className="flex flex-col">
                <h5 className="font-bold">{project.title}</h5>
                <p className="text-gray-600">{project.motivate}</p>
              </div>
              <p className="text-sm text-gray-500">{project.createdAt}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
