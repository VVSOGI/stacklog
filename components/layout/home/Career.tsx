import { LocaleHome } from '@/types'
import React from 'react'

interface Props {
  info: LocaleHome['careers'][number]
}

export function Career({ info }: Props) {
  return (
    <div key={info.company}>
      <div className="flex flex-col gap-1 mb-8">
        <div className="flex gap-4 items-center">
          <h4>{info.company}</h4>
          <h5 className="text-gray-600">2022.02.15 - 2024.03.31</h5>
        </div>
        <h5>{info['company-info']}</h5>
        <div className="flex gap-4">
          <h5>{info.position}</h5>
          <h5>Fullstack Engineer</h5>
        </div>
      </div>
      <div className="prose">
        {info.list.map((item, index) => {
          return (
            <ul key={item.title}>
              <li>
                <div>{item.title}</div>
                <p></p>
                {item.contents.map((content, contentIndex) => {
                  return <p key={index + contentIndex}>{content}</p>
                })}
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}
