import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as NavigationLogo } from "../../assets/clothingstorebrj.svg";
import ShoppingCart from "../../components/cart-icon/cart-icon.component";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-items.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { userProfile } = useContext(UserContext);
  const { isCartOpen, changeCartStatus, cartCount } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <NavigationLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            {" "}
            SHOP{" "}
          </Link>
          {userProfile ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              {" "}
              SIGN IN{" "}
            </Link>
          )}
          <ShoppingCart
            onClickHandler={changeCartStatus}
            cartCount={cartCount}
          />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
