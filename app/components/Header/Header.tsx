"use client";

/* Components */
import { CustomButton } from "@/app/components/CustomButton/CustomButton";

/* Instruments */
import { cartSlice, selectCart, useSelector, useDispatch } from "@/lib/redux";
import styles from "./header.module.css";

export const Header = () => {
  const productsInCart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cartSlice.actions.toggleShoppingCart());
  };

  return (
    <header className={styles.header}>
      <img src="/logo.svg" className={styles.logo} alt="logo" />
      <div className={styles.controls}>
        <span>
          Total cost: <strong>${productsInCart.cartTotalPrice}</strong>
        </span>
        <CustomButton
          handleClick={handleClick}
          btnIcon="/cart.svg"
          title={productsInCart.cartTotalQuantity}
        />
      </div>
    </header>
  );
};
