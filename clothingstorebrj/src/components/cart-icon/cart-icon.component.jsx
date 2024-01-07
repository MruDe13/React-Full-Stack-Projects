import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const ShoppingCart = ({ onClickHandler, cartCount }) => {
  return (
    <div className="cart-icon-container" onClick={onClickHandler}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default ShoppingCart;
