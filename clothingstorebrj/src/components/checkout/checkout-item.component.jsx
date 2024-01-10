import { useContext } from "react";
import { CartContext } from "../../contexts/cart-items.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeCartItemHandler, decreaseCartItemHandler, cartItemsHandler } =
    useContext(CartContext);

  const addItem = () => cartItemsHandler(cartItem);
  const decreaseItem = () => decreaseCartItemHandler(cartItem);
  const removeItem = () => removeCartItemHandler(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={decreaseItem}>
            &#10094;
          </div>
          <span className="value"> {quantity}</span>
          <div className="arrow" onClick={addItem}>
            &#10095;
          </div>
        </span>
        <span className="price">${quantity * price}</span>
        <div className="remove-button" onClick={removeItem}>
          &#10005;
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
