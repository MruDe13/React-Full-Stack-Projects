import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-items.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigateCheckout = useNavigate();

  const goToCheckoutHandler = () => {
    navigateCheckout("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button
        buttonStyle="inverted"
        buttonText="GO TO CHECKOUT"
        onClickHandler={goToCheckoutHandler}
      />
    </div>
  );
};

export default CartDropdown;
