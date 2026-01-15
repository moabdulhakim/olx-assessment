import { useEffect, useState } from "react";
import { useCategoryStore } from "@/store/useCategoryStore";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "@/styles/pages/Attributes.module.css";
import Header from "@/components/pages/post/Header";
import Link from "next/link";
import AttributesContainer from "@/components/pages/post/attributes/AttributesContainer";
import { useSearchParams } from "next/navigation";
import { Category } from "@/types/category";

const attributes = () => {
  const [parentCategory, setParentCategory] = useState<Category|null>(null);
  const [chosenCategory, setChosenCategory] = useState<Category|null>(null);
  const { categories } = useCategoryStore();
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryId = Number(searchParams.get("categoryId"));
    const subCategoryId = Number(searchParams.get("subCategoryId"));

    if (categories.length === 0 || !categoryId || !subCategoryId) {
      router.push("/post");
    }else{
      const parent = categories.find((cat)=>(
        cat.id === categoryId
      ))
      const child = parent?.children.find((subCat)=>(
        subCat.id === subCategoryId
      ));

      if(parent && child){
        setParentCategory(parent);
        setChosenCategory(child);
      }else{
        router.push("/post")
      }
    }
  }, [categories, router]);

  if (categories.length === 0) {
    return <div>Redirecting...</div>;
  }

  return (
    <>
      <Head>
        <title>{t.metadata.post.title}</title>
        <meta name="description" content={t.metadata.post.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page}`}>
        <Header />
        <main className={styles.main}>
          <h2>{t.attributes.sellAd}</h2>

          <div className={styles["attributes-body"]}>
            {chosenCategory && parentCategory && <AttributesContainer category={chosenCategory} parentCategory={parentCategory} />}

            <div className={styles["help"]}>
              <h4>{t.attributes.help.needHelp}</h4>
              <p>
                {t.attributes.help.reviewResources}
              </p>

              <ul>
                <li>
                  <Link href="#">
                    {t.attributes.help.tipsLink}
                  </Link>
                </li>
                <li>
                  <Link href="#">{t.attributes.help.allYouNeedLink}</Link>
                </li>
              </ul>

              <p>{t.attributes.help.changeAd}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default attributes;
