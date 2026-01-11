import Head from "next/head";

import styles from "@/styles/pages/Home.module.css";
import { useTranslation } from "@/hooks/useTranslation";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import HeroBanner from "@/components/pages/home/HeroBanner";
import { GetServerSideProps } from "next";
import { getAllCategories } from "@/services/categoryService";
import { CategoryList } from "@/types/category";
import AllCategories from "@/components/pages/home/AllCategories";
import FeaturedAds from "@/components/pages/home/FeaturedAds";


export default function Home({categories}: {categories: CategoryList}) {
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
        <Navbar categories={categories} />
        <main className={styles.main}>
            <HeroBanner />
            <AllCategories categories={categories} />
            <FeaturedAds />
        </main>
      </div>
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {
  try{
    const categories = await getAllCategories();
    return {
        props: {categories}
    }
  }catch(error){
    console.log(error);
    return {
        props: {categories: []}
    }
  }
}