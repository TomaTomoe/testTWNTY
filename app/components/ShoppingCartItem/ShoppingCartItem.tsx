'use client'

/* Components */
import { CustomButton } from '@/app/components/CustomButton/CustomButton'

/* Instruments */
import { useSelector, useDispatch, selectCart, cartSlice } from '@/lib/redux'

import styles from './shoppingCartItem.module.css'

interface ProductData {
  quantity: number;
  price: number;
}

interface ShoppingCartItemProps {
  productName: string;
  productData: ProductData;
  orderedAmount: number;
}

interface ProductsInCart {
  cartItems: Record<string, number>;
  cartTotalPrice: number;
  isOpen: boolean;
  cartTotalQuantity: number;
}

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ productName, productData, orderedAmount }) => {

  const dispatch = useDispatch();
  const cart: ProductsInCart = useSelector(selectCart);

  const handleClickDecrement = (productName: string, productData: ProductData) => {
    dispatch(cartSlice.actions.decrement(productName))
    dispatch(cartSlice.actions.setTotalPriceState(cart.cartTotalPrice - productData.price));
  }

  const handleClickIncrement = (productName: string, productData: ProductData) => {
    dispatch(cartSlice.actions.increment(productName))
    dispatch(cartSlice.actions.setTotalPriceState(cart.cartTotalPrice + productData.price));
  }

  const handleClickDelete = (productName: string, productData: ProductData, orderedAmount: number) => {
    dispatch(cartSlice.actions.deleteProduct(productName))
    dispatch(cartSlice.actions.setTotalPriceState(cart.cartTotalPrice - productData.price*orderedAmount));
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemInformation}>
        <h4 className={styles.name}>{productName}</h4>
        <p className={styles.available}>
          Available amount: <span>{productData.quantity}</span>
        </p>
        <p className={styles.price}>
          Product price: <strong>${productData.price}</strong>
        </p>
      </div>
      <div className={styles.cartItemControls}>
        <CustomButton title="-" isDisabled={orderedAmount===1} classNames={styles.buttonMinus} handleClick={() => handleClickDecrement(productName, productData)}/>
        <div>{orderedAmount}</div>
        <CustomButton title="+" isDisabled={orderedAmount===productData.quantity} classNames={styles.buttonPlus} handleClick={() => handleClickIncrement(productName, productData)} />
        <button type='button' className={styles.delete} onClick={() => handleClickDelete(productName, productData, orderedAmount)}>x</button>
      </div>
    </div>
  );
}
