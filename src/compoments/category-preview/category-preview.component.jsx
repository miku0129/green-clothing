import { Fragment } from "react";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ categoriesMap }) => {
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title]
                .filter((_, index) => index < 4)
                .map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default CategoryPreview;
