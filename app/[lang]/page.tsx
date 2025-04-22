import { getLocales } from '@/utils/getLocales'
import { LocaleHome, Locales } from '@/types'
import { Badge, Career, ShieldsBadge } from '@/components'

interface Props {
  params: { lang: Locales }
}

export default async function Page({ params: { lang } }: Props) {
  const locale = await getLocales<LocaleHome>('home', lang)
  const introduces = locale.introduce.split('<br />')
  const dokeBadges: Badge[] = ['nextjs', 'nestjs', 'typescript', 'jest', 'docker', 'shell']

  return (
    <section className="flex flex-col gap-8">
      <div className="mt-4">
        <div className="flex flex-col gap-2 h1">
          <h1>{locale.job}</h1>
          <h1>{locale.name}</h1>
        </div>
        <div className="my-8">
          {introduces.map((introduce, index) => {
            return <p key={'introduce' + index}>{introduce}</p>
          })}
        </div>
      </div>

      <div>
        <div className="flex items-end gap-4 mb-8">
          <h2>{locale.title}</h2>
          <h5>{locale.time}</h5>
        </div>
        {locale.careers.map((experience) => {
          return <Career key={experience.company} info={experience} />
        })}
      </div>

      <div>
        <h2 className="mb-4">포트폴리오</h2>
        <div className="flex flex-col gap-2 mb-4">
          <a
            className={`
              w-fit text-3xl font-medium tracking-tighter text-blue-500 cursor-pointer select-none
              hover:text-blue-400
              active:text-blue-500
            `}
            href="https://github.com/vvsogi/doke"
            target="_blank"
          >
            Doke (도케)
          </a>
          <h6>RESTful API 자동 문서화 오픈소스 라이브러리</h6>
          <ShieldsBadge badges={dokeBadges} />
        </div>
        <div
          className={`
            grid grid-cols-1
            md:grid-cols-2
          `}
        >
          <img src="/images/doke-example.png" alt="Doke" />
          <img src="/images/swagger-example.png" alt="Swagger" />
        </div>
        <div className="prose">
          <ul>
            <li>
              Doke는 RESTful API 자동 문서화를 목표로 탄생한 라이브러리입니다. 비슷한 라이브러리로 Swagger가 있습니다. 회사간 API 문서 전달
              과정에서 Swagger의 UI 측면의 부족함을 느끼고 이를 대체할만한 자동 문서화 도구의 필요성을 감지했고, 이를 직접 제작했습니다.
              해당 라이브러리는 Nest JS의 Custom Decorator와 Nest js의 DiscoveryModule을 사용해서 문서 제작에 필요한 데이터들을 자동으로
              수집합니다. 사용자는 각 엔드포인트의 설명 및 Request Parameter에 대한 설명만을 작성하고 명령어를 실행하면 외부 공개에 유리한
              디자인을 가진 API Docs 페이지를 얻을 수 있습니다.
            </li>
            <li>
              Swagger는 강조하고 싶은 UI가 있을 때 이를 수정하기 어렵지만, Doke를 사용한다면 어렵지 않습니다. doke-ui package를 클론 한 후
              원하는 UI로 커스터마이징 할 수 있습니다.
            </li>
            <li>
              해당 라이브러리는 DX를 높이기 위해 UI 빌드 및 배포에 대한 CLI 패키지를 제작 및 배포되어 있습니다. doke-nest를 통해 JSON 문서를
              얻었다면 이를 기반으로 최적화된 웹앱을 빌드합니다. Next js의 standalone 모드를 기반으로 빌드하기 때문에 기존 웹앱들의 Docker
              image 용량이 1GB ~ 2GB인 반면, doke-ui의 이미지 파일은 182MB로 약 10배 가볍습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
