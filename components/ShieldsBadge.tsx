export type Badge = 'react' | 'nextjs' | 'nestjs' | 'docker' | 'jest' | 'typescript' | 'shell'

const badgeConfig: Record<Badge, { name: string; logo: string; logoColor?: string }> = {
  react: { name: 'React.js', logo: 'react' },
  nextjs: { name: 'Next.js', logo: 'nextdotjs', logoColor: 'white' },
  nestjs: { name: 'NestJs', logo: 'nestjs', logoColor: 'ea2845' },
  docker: { name: 'Docker', logo: 'docker', logoColor: '257bd6' },
  jest: { name: 'Jest', logo: 'Jest', logoColor: 'white' },
  typescript: { name: 'TypeScript', logo: 'typescript', logoColor: '3178C6' },
  shell: { name: 'Shell', logo: 'gnu-bash', logoColor: '4EAA25' }
}

interface Props {
  badges: Badge[]
}

export function ShieldsBadge({ badges }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {badges.map((badgeKey) => {
        const badge = badgeConfig[badgeKey]
        return (
          <img
            key={badgeKey}
            src={`https://img.shields.io/badge/${badge.name}-222222?style=flat-square&logo=${badge.logo}${badge.logoColor ? `&logoColor=${badge.logoColor}` : ''}`}
            alt={`${badge.name} Badge`}
          />
        )
      })}
    </div>
  )
}
