import Head from 'next/head';
// import Image from 'next/image'
import { Inter } from 'next/font/google';

import FAQ from '@/components/pages/home/faq';
import Hero from '@/components/pages/home/hero';
import Media from '@/components/pages/home/media';
import Entry from '@/components/pages/home/entry';
import HowItWorks from '@/components/pages/home/hiw';
import Winners from '@/components/pages/home/winners';
import Partners from '@/components/pages/home/partners';
import JackpotPrize from '@/components/pages/home/jackpotPrize';
import RootLayout from '@/components/layout/RootLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <Hero />
        <Winners />
        {/* <Divider /> */}
        <JackpotPrize />
        {/* <Divider /> */}
        {/* <Background /> */}
        <HowItWorks />
        {/* <Divider /> */}
        <Media />
        {/* <Divider /> */}
        <FAQ />
        {/* <Divider /> */}
        <Partners />
        {/* <Divider /> */}
        <Entry />
      </RootLayout>
    </>
  );
}
