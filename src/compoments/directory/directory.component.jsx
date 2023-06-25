import CategoryItem from "../categoryItem/category-item.component";
import "./directory.styles.scss";

const Directory = ({categories}) => {

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
