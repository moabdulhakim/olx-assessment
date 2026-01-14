import React, { useEffect } from 'react'
import { useCategoryStore } from '@/store/useCategoryStore'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useTranslation } from '@/hooks/useTranslation';
import styles from "@/styles/pages/Post.module.css";
import Header from '@/components/pages/post/Header';

const attributes = () => {
    const {categories} = useCategoryStore();
    const {t} = useTranslation();
    const router = useRouter(); 

    useEffect(()=>{
        if(categories.length === 0){
            router.push("/post");
        }
    }, [categories, router])

    if(categories.length === 0){
        return <div>Redirecting...</div>
    }

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
              {t.attributes.sellAd}
            </h2>
        </main>
      </div>
    </>
  )
}

export default attributes