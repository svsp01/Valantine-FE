import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import heart from "../../public/eze.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanta Love Game",
  description: "Love game by vanta verse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:url" content={"https://vanta-lovegame.netlify.app/user"} />
        <meta property="og:type" content={"website"} />
        <meta
          property="og:title"
          content="Love Language and Pair Score Calculation?"/>
        <meta property="og:image" content={"https://img.freepik.com/premium-photo/ai-generated-illustration-love-theme-wallpaper-with-composition-hearts_665346-44721.jpg?size=626&ext=jpg"} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
