import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type Badge = 'react' | 'nextjs' | 'nestjs' | 'docker' | 'jest' | 'typescript' | 'shell' | 'tailwind' | 'chromeExtension' | 'aws'

const badgeConfig: Record<Badge, { name: string; logo: string; logoColor?: string }> = {
  react: { name: 'React.js', logo: 'react' },
  nextjs: { name: 'Next.js', logo: 'nextdotjs', logoColor: 'white' },
  nestjs: { name: 'NestJs', logo: 'nestjs', logoColor: 'ea2845' },
  docker: { name: 'Docker', logo: 'docker', logoColor: '257bd6' },
  jest: { name: 'Jest', logo: 'Jest', logoColor: 'white' },
  typescript: { name: 'TypeScript', logo: 'typescript', logoColor: '3178C6' },
  shell: { name: 'Shell', logo: 'gnu-bash', logoColor: '4EAA25' },
  tailwind: { name: 'TailwindCSS', logo: 'tailwindcss', logoColor: '38B2AC' },
  chromeExtension: { name: 'Chrome_Extension', logo: 'google-chrome', logoColor: 'white' },
  aws: { name: 'Amazon Web Service', logo: 'amazonwebservices', logoColor: 'ff9900' }
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  badges: Badge[]
}

export function ShieldsBadge({ badges, ...props }: Props) {
  const set: Set<Badge> = new Set()
  for (const badge of badges) {
    set.add(badge)
  }

  return (
    <div {...props} className="flex flex-wrap gap-2 mb-8">
      {Array.from(set).map((badgeKey) => {
        const badge = badgeConfig[badgeKey] || {
          name: badgeKey,
          logo: 'javascript',
          logoColor: 'F7DF1E'
        }
        return (
          <img
            key={badgeKey}
            src={`https://img.shields.io/badge/${badge.name}-222222?logo=${badge.logo}${badge.logoColor ? `&logoColor=${badge.logoColor}` : ''}`}
            alt={`${badge.name} Badge`}
          />
        )
      })}
    </div>
  )
}
