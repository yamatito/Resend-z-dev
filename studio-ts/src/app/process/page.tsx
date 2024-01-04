import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Tappi() {
  return (
    <Section title="Tappi" image={{ src: imageWhiteboard }}>
    <div className="space-y-6 text-base text-neutral-600">
      <strong className="font-semibold text-neutral-950">新しい世代の起業家から生まれた</strong>{' '}
      <p>
        Tappiは、19歳の起業家によって開発、製作、販売されたサービスです。若い世代の情熱、創造性、そしてデジタル時代への洞察がこのプロジェクトを生み出しました。Tappiは、物理とデジタルを結びつけ、新しい可能性を切り拓くことを使命としています。若者の力強いアイデアが、私たちの日常をよりインタラクティブに変えています。
      </p>
      <p>
        Our team of private investigators shadow the company director’s for
        several weeks while our account managers focus on going through their
        trash. Our senior security experts then perform social engineering
        hacks to gain access to their{' '}
        <strong className="font-semibold text-neutral-950">business</strong>{' '}
        accounts — handing that information over to our forensic accounting
        team.
      </p>
    </div>

    <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Included in this phase
    </h3>
    <TagList className="mt-4">
      <TagListItem>In-depth questionnaires</TagListItem>
      <TagListItem>Feasibility studies</TagListItem>
      <TagListItem>Blood samples</TagListItem>
      <TagListItem>Employee surveys</TagListItem>
      <TagListItem>Proofs-of-concept</TagListItem>
      <TagListItem>Forensic audit</TagListItem>
    </TagList>
  </Section>
  )
}

function Nakasu() {
  return (
    <Section title="中洲ビジョン" image={{ src: imageLaptop, shape: 1 }}>
    <div className="space-y-6 text-base text-neutral-600">
      <strong className="font-semibold text-neutral-950">中洲を魅了するデジタル広告</strong>{' '}
      <p>
        中洲サイネージ（Chucho Signage）は、九州エリアで提供するデジタル広告サービスです。
        私たちはコンプライアンスを大事にし、繁華街での広告を革新的に展開しています。中洲サイネージは、大画面モニターを活用し、ビジュアルメディアを通じて新たな可能性を提供します。
        私たちの使命は、コンプライアンスと革新を結びつけ、エリアの魅力を広げることです。
      </p>
      <p>
        Our account managers are trained to only reply to client emails after
        9pm, several days after the initial email. This reinforces the general
        aura that we are very busy and dissuades clients from asking for
        changes.
      </p>
    </div>

    <Blockquote
      author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
      className="mt-12"
    >
      Studio were so regular with their progress updates we almost began to
      think they were automated!
    </Blockquote>
  </Section>
  )
}

function BPO() {
  return (
    <Section title="業務委託" image={{ src: imageMeeting, shape: 2 }}>
    <div className="space-y-6 text-base text-neutral-600">
      <strong className="font-semibold text-neutral-950">多彩なITプロジェクトパートナー</strong>{' '}
      <p>
        WEB制作、動画制作・編集、システム開発、TikTok運用、LIVE撮影、IT相談など、多岐にわたる業務委託プロジェクトへの提供。
      </p>
      <p>
        We ensure that the main pages of the site are{' '}
        <strong className="font-semibold text-neutral-950">
          fully functional
        </strong>{' '}
        at launch — the auxiliary pages will, of course, be lorem ipusm shells
        which get updated as part of our exorbitant{' '}
        <strong className="font-semibold text-neutral-950">
          maintenance
        </strong>{' '}
        retainer.
      </p>
    </div>

    <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Included in this phase
    </h3>
    <List className="mt-8">
      <ListItem title="Testing">
        Our projects always have 100% test coverage, which would be impressive
        if our tests weren’t as porous as a sieve.
      </ListItem>
      <ListItem title="Infrastructure">
        To ensure reliability we only use the best Digital Ocean droplets that
        $4 a month can buy.
      </ListItem>
      <ListItem title="Support">
        Because we hold the API keys for every critical service your business
        uses, you can expect a lifetime of support, and invoices, from us.
      </ListItem>
    </List>
  </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
   eyebrow="Our values"
   title="私たちの価値"
      >
       <p>
          信頼性と革新の調和を大切にしています。
          <br />
          新しいトレンドや最新技術に常に注視しつつも、それを完全に取り入れず、クライアントに適した<strong className="font-semibold text-neutral-950">
            オーダーメイドのソリューション
          </strong>{' '}を提供します。
          この決定を正当化するために、私たちは自らの中心的な価値観を堅持しています。
        </p>
      </SectionIntro>

      <Container className="mt-24">
      <GridList>
          <GridListItem title="緻密さ">
          最初の段階では、お客様の要望や必要な点を注意深くヒアリングし、一緒に解決策を見つけます。
          Z世代の感性を活かし、革新的で魅力的なデザインに仕上げます。
          </GridListItem>
          <GridListItem title="適応力">
            すべてのビジネスには独自のニーズがあり、私たちの最大の強みはこれらのニーズを既存のものに柔軟に適用できることです。Z世代の柔軟性と創造性を活かし、ソリューションを提供します。
          </GridListItem>
          <GridListItem title="忠誠心">
          私たちは製品を提供するだけでなく、数十年にわたってクライアントとの長期的な関係を築くことを大切にしています。
          </GridListItem>
          <GridListItem title="革新的">
          技術の環境は常に進化しており、私たちも変化しています。常に新しいオープンソースプロジェクトを探し求めています。
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Tappi />
        <Nakasu />
        <BPO />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
