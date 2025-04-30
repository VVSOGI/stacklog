import React from 'react'
import { LocaleProjects, Locales } from '@/types'
import { formatDate, getProjectPosts } from '@/utils/mdx'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { getLocales } from '@/utils/getLocales'
import { ShieldsBadge } from '@/components'

interface Props {
  params: { lang: Locales; project: string }
}

export default async function Page({ params: { project, lang } }: Props) {
  const post = getProjectPosts(project, lang).find((post) => post.slug === lang)
  const locale = await getLocales<LocaleProjects>('projects', lang)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <h2
        className={`
          title tracking-tighter mb-2
          text-4xl sm:text-5xl
        `}
      >
        {post.metadata.title}
      </h2>
      <h6>{post.metadata.summary}</h6>
      <div className="flex flex-col justify-between gap-1 mb-4">
        <a
          className={`
            text-sm text-blue-500 w-fit
            hover:text-blue-300
            active:text-blue-500
          `}
          target="_blank"
          href={post.metadata.source}
        >
          {post.metadata.source}
        </a>
        <p className="text-sm text-neutral-600">{formatDate(post.metadata.publishedAt)}</p>
      </div>
      <ShieldsBadge className="mb-16" badges={locale.list.find((portfolio) => portfolio.page === project)?.badges || []} />
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </div>
  )
}
