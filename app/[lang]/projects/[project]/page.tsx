import React from 'react'
import { Locales } from '@/types'

interface Props {
  params: { lang: Locales; project: string }
}

export default async function Page({ params: { lang, project } }: Props) {
  return <div>page</div>
}
