import Head from "next/head";

import styles from "@/styles/Home.module.css";


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
        className={`${styles.page}`}
      >
        <main className={styles.main}>
          Text
        </main>
      </div>
    </>
  );
}
