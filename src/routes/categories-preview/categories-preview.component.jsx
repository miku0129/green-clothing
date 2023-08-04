import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import CategoryPreview from "../../compoments/category-preview/category-preview.component";
import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
