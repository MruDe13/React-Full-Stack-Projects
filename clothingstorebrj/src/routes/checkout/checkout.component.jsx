import { useContext } from "react";
import { CartContext } from "../../contexts/cart-items.context";
import CheckoutItem from "../../components/checkout/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalCartAmount } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalCartAmount}</div>
    </div>
  );
};

export default Checkout;
