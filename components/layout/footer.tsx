import { HTMLAttributeAnchorTarget } from 'react'
import { ArrowIcon } from '..'
import { Locales } from '@/types'

interface Anchor {
  target: HTMLAttributeAnchorTarget
  href: string
  title: string
}

interface Props {
  locales: Locales
}

export function Footer({ locales }: Props) {
  const list: Anchor[] = [
    { target: '_blank', href: 'https://github.com/vvsogi', title: 'github' },
    { target: '_self', href: locales === 'en' ? '/ko' : '/en', title: locales === 'en' ? 'Korean' : 'English' }
  ]

  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {list.map((anchor) => {
          return (
            <li key={anchor.href}>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target={anchor.target}
                href={anchor.href}
              >
                <ArrowIcon />
                <p className="ml-2 h-7">{anchor.title}</p>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">© {new Date().getFullYear()} MIT Licensed</p>
    </footer>
  )
}
