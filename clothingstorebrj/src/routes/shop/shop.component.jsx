import { useContext, Fragment } from "react";
import { CategoryContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";
import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <Fragment>
      {categories.map((category) => {
        const { title, items } = category;
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="categories-container">
              {items.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
