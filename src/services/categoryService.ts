
export const getAllCategories = async () => {
    const response = await fetch("https://www.olx.com.lb/api/categories");
    const data = await response.json();
    return data;
}