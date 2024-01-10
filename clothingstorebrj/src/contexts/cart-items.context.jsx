import { createContext, useEffect, useState } from "react";

const addItemToCartHandler = (cartItems, addToCartItem) => {
  const existingItem = cartItems.find((item) => item.id === addToCartItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === existingItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...addToCartItem, quantity: 1 }];
};

const removeItemFromCart = (cartItems, removeFromCartItem) => {
  const newCartItems = cartItems.filter(
    (item) => item.id !== removeFromCartItem.id
  );

  return [...newCartItems];
};

const decreaseItemFromCart = (cartItems, decreaseItem) => {
  if (decreaseItem.quantity === 1) {
    return removeItemFromCart(cartItems, decreaseItem);
  }

  const changeQuantityOfItem = cartItems.find(
    (item) => item.id === decreaseItem.id
  );

  return cartItems.map((item) =>
    item.id === changeQuantityOfItem.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  changeCartStatus: () => {},
  cartItems: [],
  cartItemsHandler: () => {},
  cartCount: 0,
  removeCartItemHandler: () => {},
  decreaseCartItemHandler: () => {},
  totalCartAmount: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  const changeCartStatus = () => {
    return isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
  };

  const cartItemsHandler = (addToCartItem) => {
    setCartItems(addItemToCartHandler(cartItems, addToCartItem));
  };

  const removeCartItemHandler = (removeFromCartItem) => {
    setCartItems(removeItemFromCart(cartItems, removeFromCartItem));
  };

  const decreaseCartItemHandler = (decreaseFromCartItem) => {
    setCartItems(decreaseItemFromCart(cartItems, decreaseFromCartItem));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newTotalCartAmount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartCount(newCartCount);
    setTotalCartAmount(newTotalCartAmount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    changeCartStatus,
    cartItems,
    cartItemsHandler,
    cartCount,
    removeCartItemHandler,
    decreaseCartItemHandler,
    totalCartAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
