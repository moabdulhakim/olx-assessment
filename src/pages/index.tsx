import Head from "next/head";

import styles from "@/styles/pages/Home.module.css";
import { useTranslation } from "@/hooks/useTranslation";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";


export default function Home() {
    const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t.metadata.title}</title>
        <meta name="description" content={t.metadata.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page}`}
      >
        <Header />
        <Navbar />
        <main className={styles.main}>

        </main>
      </div>
    </>
  );
}
