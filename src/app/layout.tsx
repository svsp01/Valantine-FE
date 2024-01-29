import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import heart from "../../public/eze.png"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: any = {
  title: "Play Love game with your Pair",
  description: "Love game by Vanta Verse",
  url: "https://vanta-lovegame.netlify.app/",
  type: "website",
  ogTitle: "Love Language and Pair Score Calculation?",
  ogDescription: "Love Language!! Valentine celebrate",
  ogImage: "https://img.freepik.com/premium-photo/ai-generated-illustration-love-theme-wallpaper-with-composition-hearts_665346-44721.jpg?size=626&ext=jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta
          property="og:title"
          content={metadata.ogTitle} />
        <meta property="og:image" content={metadata.ogImage} />
        <Script type='text/javascript' src='//pl22318896.toprevenuegate.com/e0/87/61/e08761e5b969250059ddc10f4a9142fa.js'
        strategy="beforeInteractive" 
        />

      </Head>

      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
