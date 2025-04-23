export type Badge = 'react' | 'nextjs' | 'nestjs' | 'docker' | 'jest' | 'typescript' | 'shell' | 'tailwind' | 'chromeExtension'

const badgeConfig: Record<Badge, { name: string; logo: string; logoColor?: string }> = {
  react: { name: 'React.js', logo: 'react' },
  nextjs: { name: 'Next.js', logo: 'nextdotjs', logoColor: 'white' },
  nestjs: { name: 'NestJs', logo: 'nestjs', logoColor: 'ea2845' },
  docker: { name: 'Docker', logo: 'docker', logoColor: '257bd6' },
  jest: { name: 'Jest', logo: 'Jest', logoColor: 'white' },
  typescript: { name: 'TypeScript', logo: 'typescript', logoColor: '3178C6' },
  shell: { name: 'Shell', logo: 'gnu-bash', logoColor: '4EAA25' },
  tailwind: { name: 'TailwindCSS', logo: 'tailwindcss', logoColor: '38B2AC' },
  chromeExtension: { name: 'Chrome_Extension', logo: 'google-chrome', logoColor: 'white' }
}

interface Props {
  badges: Badge[]
}

export function ShieldsBadge({ badges }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {badges.map((badgeKey) => {
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
