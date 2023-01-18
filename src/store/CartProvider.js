import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemHandler = () => {};
  const RemoveItemHandler = (id) => {};

  const CartContext = {
    items: [],
    totalAmount: 0,
    additem: addItemHandler,
    removeItem: RemoveItemHandler,
  };

  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
