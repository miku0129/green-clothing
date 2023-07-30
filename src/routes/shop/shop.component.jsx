import { useContext } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../compoments/category-preview/category-preview.component";
import Category from "../../compoments/category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const route = useParams();

  return (
    <Routes>
      <Route
        path=""
        element={<CategoryPreview categoriesMap={categoriesMap} />}
      />
      <Route
        path=":route"
        element={
          <Category categoryTitle={route["*"]} categoriesMap={categoriesMap} />
        }
      />
    </Routes>
  );
};

export default Shop;
