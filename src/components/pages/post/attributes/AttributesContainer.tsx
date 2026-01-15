import styles from "@/styles/pages/Attributes.module.css";
import { Category, FieldsResponse } from "@/types/category";
import AttributeField from "./AttributeField";
import Image from "next/image";
import { getIconPath, getImagePath } from "@/utils/utils";
import Link from "next/link";
import Input from "@/components/ui/Input";
import { useEffect, useState } from "react";
import { getCategoryFields } from "@/services/categoryService";
import DynamicField from "./DynamicField";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";

const AttributesContainer = ({
  category,
  parentCategory,
}: {
  category: Category;
  parentCategory: Category;
}) => {
  const [attributes, setAttributes] = useState<FieldsResponse | null>(null);
  const {t, isAr} = useTranslation();

  const fetchAttributes = async () => {
    try {
      const data = await getCategoryFields(category.slug);
      setAttributes(data);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  useEffect(() => {
    fetchAttributes();
  }, [category]);

  return (
    <div className={styles["attributes-container"]}>
      <div className={styles["attributes-container-head"]}>
        <AttributeField label="Category">
          <div className={styles["field-category-change"]}>
            <div className={styles["category-info"]}>
              <Image
                src={getImagePath(`${parentCategory.slug}.png`)}
                width={54}
                height={54}
                alt={category.slug}
              />
              <div>
                <p>{isAr? parentCategory.name:parentCategory.name_l1}</p>
                <p>{isAr? category.name:category.name_l1}</p>
              </div>
            </div>

            <Link href="/post">
                {t.attributes.change}
            </Link>
          </div>
        </AttributeField>

        <AttributeField label="Title" isRequired>
          <Input placeholder={t.attributes.fields.title} />
        </AttributeField>
        <AttributeField label={t.attributes.fields.video}>
          <Input
            icon={getIconPath("youtube.svg")}
            placeholder={t.attributes.fields.videoInput}
          />
        </AttributeField>
      </div>

      <hr style={{ margin: "3rem auto", width: "80%" }} />

      <div className={styles["attributes-container-body"]}>
        {attributes ? (
          attributes[String(category.id)].flatFields.map((attribute) => (
            <DynamicField attribute={attribute} isAr={isAr} />
          ))
        ) : 
        Array.from({length: 7}).map((_)=>(
            <div style={{ width: "100%", display: "flex", gap: "2rem" }}>
            <div
              className="skeleton-item"
              style={{ flex: 1, height: "3rem" }}
            ></div>
            <div
              className="skeleton-item"
              style={{ flex: 3, width: "70%", height: "3rem" }}
            ></div>
          </div>
        ))
        }
      </div>

      <Button type="submit" className={styles["submit-btn"]} variant="primary" fullWidth>
        {t.attributes.sellAd}
      </Button>
    </div>
  );
};

export default AttributesContainer;
