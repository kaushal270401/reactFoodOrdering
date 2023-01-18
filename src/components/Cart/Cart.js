import Modal from "../Ui/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItemsNames = <ul className={classes["cart-items"]}></ul>;

  return (
    <Modal onClose={props.closeCart}>
      {cartItemsNames}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>100.1</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick ={props.closeCart}>Close</button>
        <button className={classes.button}>Order Food</button>
      </div>
    </Modal>
  );
};

export default Cart;
