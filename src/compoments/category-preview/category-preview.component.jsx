import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <CategoryPreviewTitle>{title.toUpperCase()}</CategoryPreviewTitle>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.key} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
