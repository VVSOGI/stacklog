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
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.metadata.publishedAt)}</p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </div>
  )
}
