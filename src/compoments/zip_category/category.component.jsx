import { Fragment } from "react";

import ProductCard from "../product-card/product-card.component";

import "./category.styles.scss";

const Category = ({ categoryTitle, categoriesMap }) => {
  return (
    <Fragment>
      {Object.keys(categoriesMap)
        .filter((title) => title === categoryTitle)
        .map((title) => {
          return (
            <Fragment key={title}>
              <h2>{title}</h2>
              <div className="products-container">
                {categoriesMap[title].map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </div>
            </Fragment>
          );
        })}
    </Fragment>
  );
};

export default Category;
