import styles from "@/styles/pages/Attributes.module.css";
import { Category, FieldsResponse } from "@/types/category";
import AttributeField from "./AttributeField";
import Image from "next/image";
import { getIconPath, getImagePath } from "@/utils/utils";
import Link from "next/link";
import Input from "@/components/ui/Input";
import { useEffect, useMemo, useState } from "react";
import { getCategoryFields } from "@/services/categoryService";
import DynamicField from "./DynamicField";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";
import useCategoryAttributes from "@/hooks/useCategoryAttributes";
import useForm from "@/hooks/useForm";

const AttributesContainer = ({
  category,
  parentCategory,
}: {
  category: Category;
  parentCategory: Category;
}) => {
  const { t, isAr } = useTranslation();
  const { attributes } = useCategoryAttributes({
    categorySlug: category.slug,
    categoryId: category.id,
  });

  const initialFormValues = useMemo(() => {
    if (!attributes) return {};

    return attributes.reduce(
      (acc, attribute) => {
        acc[attribute.attribute] = "";
        return acc;
      },
      { videoLink: "", title: "" } as Record<string, any>
    );
  }, [attributes]);

  const { handleSubmit, errors, handleChange, values, isSubmitting } = useForm({
    initialValues: initialFormValues,
    onSubmit: (values) => {
      console.log("Final Data: ", values);
    },
    validate: (vals) => {
      const errs: any = {};
      attributes &&
        attributes.forEach((field) => {
          if (field.isMandatory && !vals[field.attribute]) {
            errs[field.attribute] = isAr
              ? `حقل ${field.name} مطلوب`
              : `${field.attribute} is a required field`;
          }
        });
      return errs;
    },
  });

  return (
    <form onSubmit={handleSubmit} className={styles["attributes-container"]}>
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
                <p>{isAr ? parentCategory.name : parentCategory.name_l1}</p>
                <p>{isAr ? category.name : category.name_l1}</p>
              </div>
            </div>

            <Link href="/post">{t.attributes.change}</Link>
          </div>
        </AttributeField>

        <AttributeField label="Title" isRequired>
          <Input
            placeholder={t.attributes.fields.title}
            name="title"
            value={values.title}
            onChange={handleChange}
            error={errors.title}
          />
        </AttributeField>
        <AttributeField label={t.attributes.fields.video}>
          <Input
            icon={getIconPath("youtube.svg")}
            placeholder={t.attributes.fields.videoInput}
            name="videoLink"
            value={values.videoLink}
            onChange={handleChange}
            error={errors.videoLink}
          />
        </AttributeField>
      </div>

      <hr style={{ margin: "3rem auto", width: "80%" }} />

      <div className={styles["attributes-container-body"]}>
        {attributes
          ? attributes.map((attribute) => (
              <DynamicField
                key={attribute.id}
                attribute={attribute}
                isAr={isAr}
                name={attribute.attribute}
                value={values[attribute.attribute]}
                onChange={handleChange}
                error={errors[attribute.attribute]}
              />
            ))
          : Array.from({ length: 7 }).map((_) => (
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
            ))}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={styles["submit-btn"]}
        variant="primary"
        fullWidth
      >
        {isSubmitting? t.common.loading:t.attributes.sellAd}
      </Button>
    </form>
  );
};

export default AttributesContainer;
