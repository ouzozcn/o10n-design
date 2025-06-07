import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ThankYou from '@/components/ThankYou';
import Button from '@/components/Button';
import TopDivider from '@/components/TopDivider';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image';
import Link from 'next/link';
import MetaInfo from '@/components/MetaInfo';

export default function Solart() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex flex-row p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">Solart</h1>
          <Button
            label="See GitHub Repo"
            type="secondary"
            size="medium"
            endIcon={<ArrowOutwardIcon />}
            to="http://github.com/ouzozcn/Solart"
            target="_blank"
          />
        </div>
      </div>
      <div className="PageImage flex p-8 w-full h-60 md:h-auto bg-cyan-50 border-b border-stone-900 justify-center items-center gap-4">
        <Image
          src="/img/hero/hero-2fa.svg"
          alt="Jotform 2FA Hero"
          width={1200}
          height={600}
          className="drop-shadow-lg"
        />
      </div>
      <div className="PageContent flex flex-col w-full h-full gap-4 p-8 border-b border-stone-900">
        <div className="PageMeta flex flex-col w-full h-full gap-2">
          <div className="PageTitle px-8 pt-5 pb-2 items-center justify-center text-center text-stone-900 text-h1 font-medium font-sans">
            Enhancing Security Through Two-Factor Authentication
          </div>
          <div className="PageDescription px-12 py-2 items-center justify-center text-center text-stone-900 text-lg font-normal font-sans">
            Designing a secure and frictionless 2FA experience for 25M Jotform users
          </div>
        </div>
      </div>
      <div className="BodyContainer flex flex-col gap-0 font-sans">
        <div className="p-4 md:px-16 md:py-8 text-xl text-center font-medium text-stone-900">
          As a product designer in Jotform&apos;s Enterprise Division, I led the design and rollout
          of a platform-wide Two-Factor Authentication (2FA) feature—addressing 2,000+ user requests
          and fulfilling enterprise-grade security needs without compromising usability.
        </div>
        <SectionTitle title="The Challenge" />
        <div className="flex flex-col md:flex-row gap-4 p-4 md:px-16 md:py-8 items-center justify-center">
          <div className="SectionContent w-full items-center justify-center text-start text-stone-900 text-lg gap-4">
            <p>
              Our goal was to improve account security with an additional layer of
              authentication—without creating friction or drop-off in user experience. We needed a
              solution that served both our individual (B2C) users and our enterprise clients with
              scalable and customizable options.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
