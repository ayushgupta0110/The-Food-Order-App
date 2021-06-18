import React from "react";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: "3", price: "12.99" }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <div>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}></button>
        <button className={classes.button}>Order</button>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;