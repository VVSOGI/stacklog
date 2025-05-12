import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { formatDate, getBlogPosts } from '@/utils/mdx'
import { Locales } from '@/types'

interface Props {
  params: { lang: Locales; post: string }
}

export default async function Page({ params: { post, lang } }: Props) {
  const column = getBlogPosts(post).find((post) => post.slug === lang)

  if (!column) {
    notFound()
  }

  return (
    <section>
      <div className="flex flex-col gap-4">
        <h3 className="font-extrabold">{column.metadata.title}</h3>
        <h6>{column.metadata.summary}</h6>
      </div>
      <div className="flex justify-between items-center mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(column.metadata.publishedAt)}</p>
      </div>
      <article className="prose">
        <CustomMDX source={column.content} />
      </article>
    </section>
  )
}
