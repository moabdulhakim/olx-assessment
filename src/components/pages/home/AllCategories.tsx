import { CategoryList } from "@/types/category";
import { getImagePath } from "@/utils/utils";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.css";
import { useTranslation } from "@/hooks/useTranslation";

const AllCategories = ({ categories }: { categories: CategoryList }) => {
  const {t, locale} = useTranslation();

  return (
    <div>
      <h2>{t.home.categories}</h2>

      <div className={styles["categories-container"]}>
        {categories.map((category) => (
          <div className={styles["category-image"]} key={category.id}>
            <Image
              src={getImagePath(`${category.slug}.png`)}
              alt={locale == "ar" ? category.name_l1 : category.name}
              width={100}
              height={100}
            />
            <span>{locale == "ar" ? category.name_l1 : category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
