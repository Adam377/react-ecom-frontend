import { getItem } from "./localStorage";

export const getAllProductsSortedByDateDescending = () => {
    const productsJson = getItem("products");
    const productsData = JSON.parse(productsJson);

    const sortedProductsList = [...productsData].sort(
        (a, b) => new Date(b.productReleaseDate) - new Date(a.productReleaseDate)
    );

    return sortedProductsList;
}