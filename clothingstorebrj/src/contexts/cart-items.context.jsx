import { createContext, useEffect, useState } from "react";

const addItemToCartHandler = (cartItems, addToCartItem) => {
  const existingItem = cartItems.find((item) => item.id === addToCartItem.id);
  console.log(cartItems);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === existingItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...addToCartItem, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  changeCartStatus: () => {},
  cartItems: [],
  cartItemsHandler: () => {},
  cartCount: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const changeCartStatus = () => {
    return isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
  };

  const cartItemsHandler = (addToCartItem) => {
    setCartItems(addItemToCartHandler(cartItems, addToCartItem));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    changeCartStatus,
    cartItems,
    cartItemsHandler,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
