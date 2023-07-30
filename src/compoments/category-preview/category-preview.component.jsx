// import { Fragment } from "react";
// import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss"

const CategoryPreview = ({ title, products }) => {
  return (
    // title && (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.key} product={product} />;
          })}
      </div>
    </div>
  );
  // );
};
// const CategoryPreview = ({ categoriesMap }) => {
//   return (
//     <Fragment>
//       {Object.keys(categoriesMap).map((title) => {
//         return (
//           <Fragment key={title}>
//             <Link to={title}>
//               <h2>{title}</h2>
//             </Link>
//             <div className="products-container">
//               {categoriesMap[title]
//                 .filter((_, index) => index < 4)
//                 .map((product) => {
//                   return <ProductCard key={product.id} product={product} />;
//                 })}
//             </div>
//           </Fragment>
//         );
//       })}
//     </Fragment>
//   );
// };

export default CategoryPreview;
