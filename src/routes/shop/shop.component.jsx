import { useContext } from "react";
import { ProcductsContext } from "../../contexts/products.context";

import ProductCard from "../../compoments/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProcductsContext);
  return (
    <div className="products-container">
      {products &&
        products.map((product) => {
          console.log("product: ", product);
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Shop;
