import { createContext, useContext, useEffect, useState } from "react";
import { getAllProductsSortedByDateDescending } from "../utils/productsList";

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    
    // create initialised state so all products are loaded before user can use site
    const [isInitialised, setIsInitialised] = useState(false);

    // use effect to load products from local storage and put into stateful variable
    useEffect(() => {
        setProducts(getAllProductsSortedByDateDescending);

        setIsInitialised(true);
    }, []);

    const getProductById = (id) => products.find((p) => p.productId === id);

    return(
        <ProductContext.Provider value={{products, getProductById, isInitialised}}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProductContext = () => useContext(ProductContext);