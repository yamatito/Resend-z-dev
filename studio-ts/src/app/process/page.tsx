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
import { Button } from '@/components/Button'

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
          Tappiは、19歳の起業家によって開発、製作、販売されたサービスです。
          <br />
          若い世代の情熱、創造性、そしてデジタル時代への洞察がこのプロジェクトを生み出しました。
        </p>
        <p>
          Tappiは、紙の名刺やQRコードを超えた新しいネットワーキングの形を提供し、          <strong className="font-semibold text-neutral-950">ビジネス</strong>{' '}の未来を形作ります。
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        活用事例
      </h3>
      <TagList className="mt-4">
        <TagListItem>LINE誘導</TagListItem>
        <TagListItem>Bar</TagListItem>
        <TagListItem>アパレルショップ</TagListItem>
        <TagListItem>イベント情報</TagListItem>
        <TagListItem>物販</TagListItem>
        <TagListItem>クーポン配布</TagListItem>
      </TagList>
      <div className='mt-4'>
      <Button ><a href="https://tappi.official.ec/">ECサイトへ</a></Button>
      </div>
    </Section>
  )
}

function Nakasu() {
  return (
    <Section title="デジタルサイネージ広告（中洲ビジョン）" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <strong className="font-semibold text-neutral-950">中洲の繁華街に新たな光を。</strong>{' '}
        <p>
        中洲ビジョンは、九州随一の歓楽街・中洲の入口、中洲川端駅の上に設置された大画面LEDビジョンです。
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="リーズナブルな価格で最大のインパクト">
        55,000円から、街の中心であなたのブランドをアピールできます。
        私たちは、高いインパクトの映像広告を手頃な価格で提供し、あなたの予算に合わせて柔軟なプランを用意しています。インパクトのある大画面からの映像と音声で、効果的にメッセージを伝えましょう。
        </ListItem>
      </List>
      <div className='mt-4'>
      <Button ><a href="https://nakasuvision.zdev.co.jp/">申し込みサイト</a></Button>
      </div>
    </Section>
  )
}

function BPO() {
  return (
    <Section title="業務委託" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <strong className="font-semibold text-neutral-950">多彩なITプロジェクトに対応します。</strong>{' '}
        <p>
          WEB制作、動画制作・編集、システム開発、SNS運用、ライブ撮影、IT相談など、 <strong className="font-semibold text-neutral-950">
          幅広い技術
          </strong>{' '}とサービスでお客様のビジネスをサポート。
          <br />
          当社の専門チームが、高品質な成果物を提供します。
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

function WEB() {
  return (
    <Section title="WEB開発" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <strong className="font-semibold text-neutral-950">ウェブはビジネスの顔です。</strong>{' '}
        <p>
          当社は、お客様のビジネスアイデンティティを映し出す、美しく機能的なウェブサイトの設計と開発に特化しています。
          <br />
          クリエイティブなデザインと最新技術の融合により、訪問者の心に残るサイトを構築します。
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
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="精緻性 - Meticulousness">
          私たちは細部にまで目を配り、お客様一人ひとりのニーズに合わせたカスタマイズされたソリューションを提供します。
          <br />
          プロジェクトの初期段階から、緻密なヒアリングと計画を行い、期待を超える成果を目指します。
          </GridListItem>
          <GridListItem title="信頼性 - Reliability">
          私たちはお客様のビジネスパートナーとして、信頼と誠実さをもって対応します。
          <br />
          プロジェクトの成功はもちろん、長期的な関係構築にも注力し、何十年にもわたって信頼できるパートナーであり続けることを約束します。
          </GridListItem>
        
          <GridListItem title="パーソナライゼーション - Personalization">
          私たちは、一つ一つのビジネスがユニークであることを理解しています。
          <br />
          そのため、標準的なソリューションではなく、お客様の特定のニーズに合わせたパーソナライズされたアプローチを取ります。
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: '事業紹介',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our business" title="事業紹介">
        <p>
          私たちは、革新と信頼性を重視し、お客様一人ひとりに合わせたカスタマイズされたソリューションを提供することで、新しい可能性を切り拓いています。
          <br />
          以下に、私たちの主要な事業領域をご紹介します。
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Tappi />
        <Nakasu />
        <BPO />
        <WEB />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
