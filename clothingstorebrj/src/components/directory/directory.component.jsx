import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categoriesList }) => {
  return (
    <div className="categories-container">
      {categoriesList.map(({ id, title, imageUrl }) => {
        return <CategoryItem key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default Directory;
