import { CategoryList } from "@/types/category";
import { getImagePath } from "@/utils/utils";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.css";

const AllCategories = ({ categories }: { categories: CategoryList }) => {
  return (
    <div>
      <h2>All Categories</h2>

      <div className={styles["categories-container"]}>
        {categories.map((category) => (
          <div className={styles["category-image"]} key={category.id}>
            <Image
              src={getImagePath(`${category.slug}.png`)}
              alt={category.name}
              width={100}
              height={100}
            />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
