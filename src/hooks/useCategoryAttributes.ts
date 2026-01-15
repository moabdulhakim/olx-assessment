import { getCategoryFields } from '@/services/categoryService';
import { CategoryField } from '@/types/category';
import React, { useEffect, useState } from 'react'

const useCategoryAttributes = ({categorySlug, categoryId}: {categorySlug: string, categoryId: number}) => {
  const [attributes, setAttributes] = useState<CategoryField[] | null>(null);
  const fetchAttributes = async () => {
    try {
      const data = await getCategoryFields(categorySlug);
      const fields = data[String(categoryId)].flatFields;
      setAttributes(fields);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  useEffect(() => {
    fetchAttributes();
  }, [categorySlug]);

  return {attributes}
}

export default useCategoryAttributes