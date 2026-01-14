import { CategoryList } from "@/types/category";
import { create } from "zustand";

interface CategoryStore {
    categories: CategoryList;
    setCategories: (categories: CategoryList) => void;
}

export const useCategoryStore = create<CategoryStore>((set)=>({
    categories: [],
    setCategories: (categories: CategoryList) => set({categories})
}))