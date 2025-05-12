import Link from 'next/link'
import { LocaleBlog, Locales } from '@/types'
import { getLocales } from '@/utils/getLocales'
import { formatDate } from '@/utils/mdx'

interface Props {
  params: { lang: Locales }
}

export default async function Page({ params: { lang } }: Props) {
  const locale = await getLocales<LocaleBlog>('blog', lang)

  return (
    <section>
      <h6 className="mb-8 font-normal font">{locale.title}</h6>
      {locale.list.map((post) => (
        <Link
          key={post.page}
          className="flex justify-between space-y-1 mb-4 pb-4 border-gray-100 border-b"
          href={`/${lang}/blog/${post.page}`}
        >
          <div className="flex flex-col">
            <div className="max-w-[600px] flex flex-col gap-2 mb-8">
              <h5 className="text-neutral-900 dark:text-neutral-100 font-extrabold tracking-tight">{post.title}</h5>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">{post.description}</p>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 tabular-nums">{formatDate(post.createdAt)}</p>
          </div>
          <img className="w-[200px] h-[120px] object-cover" src={post.banner} alt={post.banner} />
        </Link>
      ))}
    </section>
  )
}
