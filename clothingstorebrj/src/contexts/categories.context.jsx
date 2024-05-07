import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../shop-data.js";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoryContext = createContext({
  categories: [],
  setCategories: () => {},
});

export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(SHOP_DATA);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categories, setCategories };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
