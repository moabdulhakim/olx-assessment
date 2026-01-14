import { Category, CategoryList } from "@/types/category";
import styles from "@/styles/pages/Post.module.css";
import { useTranslation } from "@/hooks/useTranslation";
import { getIconPath, getImagePath } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const ChooseCategory = ({ categories }: { categories: CategoryList }) => {
  const { t, isAr } = useTranslation();

  return (
    <div style={{ marginInlineStart: "2rem" }}>
      <h3>{t.post.chooseCategory}</h3>

      <div className={`${styles["categories-container"]}`}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} isAr={isAr} />
        ))}
      </div>
    </div>
  );
};

const CategoryCard = ({
  category,
  isAr,
}: {
  category: Category;
  isAr: boolean;
}) => {
  return (
    <Link href={`/post/attributes?category=${category.id}`} className={`${styles["category-card"]}`}>
      <div className={`${styles["card-details"]}`}>
        <Image
          src={getImagePath(`${category.slug}.png`)}
          alt={isAr ? category.name_l1 : category.name}
          width={50}
          height={50}
        />
        <h4>{isAr ? category.name_l1 : category.name}</h4>
      </div>
        <Image src={getIconPath("arrow.svg")} width={20} height={20} alt="arrow" style={{rotate: isAr? "90deg":"270deg"}} />
    </Link>
  );
};

export default ChooseCategory;
