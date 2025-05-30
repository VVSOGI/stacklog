import { LocaleNav, Locales } from '@/types'
import { getLocales } from '@/utils/getLocales'
import Link from 'next/link'

interface Props {
  locales: Locales
}

export async function Navbar({ locales }: Props) {
  const { home, project, blog } = await getLocales<LocaleNav>('nav', locales)

  const navItems = {
    '/': {
      name: home
    },
    '/projects': {
      name: project
    },
    '/blog': {
      name: blog
    }
  }

  return (
    <aside className="-ml-[8px] mb-4 py-4 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={'/' + locales + '/' + path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
