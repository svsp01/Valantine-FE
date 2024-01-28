import UserOnboardComponent from '@/components/user/UserOnboardComponent'
import Head from 'next/head'
import React from 'react'

export const metadata: any = {
    title: "Play Love game with your Pair",
    description: "Love game by Vanta Verse",
    url: "https://vanta-lovegame.netlify.app/",
    type: "website",
    ogTitle: "Love Language and Pair Score Calculation?",
    ogDescription: "Love Language!! Valentine celebrate",
      };
function page() {
    
  return (
    <div>
        <Head>
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta
          property="og:title"
          content={metadata.ogTitle}/>
        </Head>
        <UserOnboardComponent /></div>
  )
}

export default page