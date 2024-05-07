import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-items.context";

const ProductCard = ({ product }) => {
  console.log(product);
  const { name, imageUrl, price } = product;
  const { cartItemsHandler } = useContext(CartContext);

  const onClickHandler = () => {
    cartItemsHandler(product);
  };
  return (
    <>
      <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button
          buttonStyle={"inverted"}
          buttonText={"Add To Cart"}
          onClickHandler={onClickHandler}
        />
      </div>
    </>
  );
};

export default ProductCard;
