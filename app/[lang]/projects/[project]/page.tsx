import React from 'react'
import { Locales } from '@/types'
import { formatDate, getProjectPosts } from '@/utils/mdx'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'

interface Props {
  params: { lang: Locales; project: string }
}

export default async function Page({ params: { project, lang } }: Props) {
  const post = getProjectPosts(project, lang).find((post) => post.slug === lang)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <h1 className="title font-semibold text-2xl tracking-tighter">{post.metadata.title}</h1>
      <div className="flex flex-col justify-between gap-1 mt-2 mb-8">
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
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </div>
  )
}
