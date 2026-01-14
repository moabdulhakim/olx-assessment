import { Category, CategoryList } from "@/types/category";
import styles from "@/styles/pages/Post.module.css";
import { useTranslation } from "@/hooks/useTranslation";
import { getIconPath, getImagePath } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ChooseCategory = ({ categories }: { categories: CategoryList }) => {
  const { t, isAr } = useTranslation();
  const [chosenCategoryId, setChosenCategory] = useState<number>(-1);
  const [subCategories, setSubCategories] = useState<CategoryList | null>(null);


  useEffect(()=>{
    setSubCategories(categories.find((cat)=> cat.id==chosenCategoryId)?.children || [])
  }, [chosenCategoryId])

  return (
    <div style={{ marginInlineStart: "2rem" }}>
      <h4 style={{marginInlineStart: "2rem", marginBottom: "1rem"}}>{t.post.chooseCategory}</h4>

      <div className={`${styles["all-categories-options"]}`}>
        <div className={`${styles["categories-container"]}`}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} isAr={isAr} chosenCategoryId={chosenCategoryId} setChosenCategoryId={setChosenCategory} />
          ))}
        </div>

        <div className={styles["sub-categories"]}>
          {
            subCategories && subCategories.map((category)=>(
              <Link href={`/post/attributes?categoryId=${category.parentID}&subCategoryId=${category.id}`} className={`${styles["category-card"]}`}>
                <p>{isAr ? category.name_l1 : category.name}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({
  category,
  isAr,
  chosenCategoryId,
  setChosenCategoryId
}: {
  category: Category;
  isAr: boolean;
  chosenCategoryId: number;
  setChosenCategoryId: (id: number) => void;
}) => {
  return (
    <button className={`${styles["category-card"]} ${category.id === chosenCategoryId ? styles["active-card"] : ""}`} onClick={()=> {setChosenCategoryId(category.id)}}>
      <div className={`${styles["card-details"]}`}>
        <Image
          src={getImagePath(`${category.slug}.png`)}
          alt={isAr ? category.name_l1 : category.name}
          width={30}
          height={30}
        />
        <h4>{isAr ? category.name_l1 : category.name}</h4>
      </div>
        <Image src={getIconPath("arrow.svg")} width={20} height={20} alt="arrow" style={{rotate: isAr? "90deg":"270deg"}} />
    </button>
  );
};

export default ChooseCategory;
