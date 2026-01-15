import { FieldsResponse } from "@/types/category";

export const getAllCategories = async () => {
    const response = await fetch("https://www.olx.com.lb/api/categories");
    const data = await response.json();
    return data;
}

export const getCategoryFields = async(slug: string):Promise<FieldsResponse> =>{
    const response = await fetch(`https://www.olx.com.lb/api/categoryFields?categorySlugs=${slug}&includeChildCategories=true&splitByCategoryIDs=true&flatChoices=true&groupChoicesBySection=true&flat=true`);
    const data = await response.json();
    return data;
}