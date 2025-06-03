import type { Metadata } from 'next'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import ContentCard from '@/components/ContentCard'
import IconButton from '@/components/IconButton'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoCard from '@/components/InfoCard'
import Menu from '@/components/Menu'
import PageBreaker from '@/components/PageBreaker'
import MetaInfo from '@/components/MetaInfo'
import Hauscard from '@/components/Hauscard'
import Tag from '@/components/Tag'
import RowCard from '@/components/RowCard'
import SectionTitle from '@/components/SectionTitle'
import SwapContent from '@/components/SwapContent'
import ThankYou from '@/components/ThankYou'
import Link from 'next/link'
import LanguageIcon from '@mui/icons-material/Language'
export const metadata: Metadata = {
  title: 'Docs | O10N Design',
  description: 'Welcome to O10N Design docs',
}

export default function Docs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center gap-8 text-sm">
        <h1 className="text-4xl font-bold text-center">Welcome to O10N Design</h1>
        <p className="text-xl text-center">
          Design & Development Portfolio
        </p>
        <div className="flex flex-col items-center gap-8">
          <Button label=" Design & Development Portfolio" to="/about" />
          <ContentCard title="Content Card" content="This is a content card" color="lime" />
          <IconButton type="secondary" size="medium" icon={<HomeRoundedIcon />} />
          <InfoCard />
          <Menu />
          <PageBreaker sectionNumber={1} sectionTitle="About" />
          <MetaInfo title="About" firstMeta="Oğuzhan Özcan" secondMeta="Product Designer" thirdMeta="Jotform" fourthMeta="2024 - Present" fifthMeta="New York, NY" />
          <Hauscard title="Hauscard" tags={[{ label: "Tag", size: "small", type: "outline" }]} />
          <Tag label="Tag will be here" size="small" type="red" />
          <RowCard direction="right" cardTitle="Row Card" cardContent="This is a row card" tags={[{ label: "Tag", size: "small", type: "outline" }]} />
          <SectionTitle title="Section Title" startIcon={<HomeRoundedIcon />} />
          <SwapContent label="Swap Content" />
          <ThankYou className="w-full h-auto"
        message="Thanks for taking the time to explore this project. I hope you enjoyed the deep dive into the process, challenges, and learnings behind it."
        exploreBlocks={[
          <Link key="jotform-logbook" href="/ideas/jotform-logbook" className="flex-1 h-full">
            <div className="SectionBlock h-full p-6  flex flex-col justify-start items-start gap-2 cursor-pointer bg-orange-100 hover:bg-orange-200 transition sm:border-b lg:border-b-0 lg:border-r border-stone-900">
              <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                Jotform Logbook
              </div>
              <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                An internal tool for better company awareness
              </div>
            </div>
          </Link>,
          <Link key="kroma" href="/product/kroma" className="flex-1 h-full">
            <div className="SectionBlock  h-full p-6 bg-pink-100 flex flex-col justify-start items-start gap-2 cursor-pointer hover:bg-pink-200 transition">
              <div className="self-stretch text-stone-900 text-lg font-medium font-sans leading-normal">
                Kroma
              </div>
              <div className="self-stretch text-stone-900 text-md font-normal font-sans">
                Color Blindness Accessibility Checker for User Interfaces
              </div>
            </div>
          </Link>,
        ]}
        simpleTabs={[
          {
            icon: <LanguageIcon />,
            state: "idle",
            to: "https://usekroma.com/",
            className: "h-full  hover:bg-blue-100 border-r-0 ",
          },
        ]}
      />
        </div>
      </div>
      <Footer />
    </main>
  )
}
