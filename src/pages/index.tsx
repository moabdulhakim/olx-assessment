import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

import variables from "@/styles/Variables.module.css";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Buy and Sell anywhere in Lebanon with OLX / dubizzle Lebanon online classifieds</title>
        <meta name="description" content="OLX / dubizzle Lebanon offers thousands of listings across cars, properties, furniture, jobs, electronics, and services. Explore what’s available today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div
        className={`${styles.page} ${variables.variables} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          
        </main>
      </div>
    </>
  );
}
