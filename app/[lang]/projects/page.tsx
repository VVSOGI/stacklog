import { getLocales } from '@/utils/getLocales'
import { formatDate } from '@/utils/mdx'
import { LocaleProjects, Locales } from '@/types'

interface Props {
  params: { lang: Locales }
}

export default async function Page({ params: { lang } }: Props) {
  const locale = await getLocales<LocaleProjects>('projects', lang)

  return (
    <div>
      <h2 className="mb-4 font-normal">{locale.title}</h2>
      <div
        className={`
          grid grid-cols-1 gap-4
          sm:grid-cols-2
        `}
      >
        {locale.list.map((project) => {
          return (
            <a key={project.title} href={`/${lang}/projects/${project.page}`} className="h-fit flex flex-col gap-2 pb-4 cursor-pointer">
              <img className="object-contain w-full h-[300px]" src={project.banner} alt={project.banner} />
              <div className="flex flex-col">
                <h5 className="font-medium">{project.title}</h5>
                <p className="text-gray-600">{project.motivate}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500">{formatDate(project.createdAt)}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
