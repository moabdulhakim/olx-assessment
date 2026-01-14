import Head from "next/head";

import styles from "@/styles/pages/Post.module.css";
import { useTranslation } from "@/hooks/useTranslation";
import { GetServerSideProps } from "next";
import { getAllCategories } from "@/services/categoryService";
import { CategoryList } from "@/types/category";
import Header from "@/components/pages/post/Header";
import ChooseCategory from "@/components/pages/post/ChooseCategory";
import { useEffect } from "react";
import { useCategoryStore } from "@/store/useCategoryStore";


export default function Post({categories}: {categories: CategoryList}) {
    const {t} = useTranslation();
    const {setCategories} = useCategoryStore();

    useEffect(() => {
        setCategories(categories);
    }, [categories]);

  return (
    <>
      <Head>
        <title>{t.metadata.post.title}</title>
        <meta name="description" content={t.metadata.post.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page}`}
      >
        <Header />
        <main className={styles.main}>
            <h2>
              {t.metadata.post.title}
            </h2>

            <ChooseCategory categories={categories} />
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