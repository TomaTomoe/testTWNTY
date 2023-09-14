'use client'

/* Components */
import { CustomButton } from '../CustomButton/CustomButton';
import { ShoppingCartItem } from '@/app/components/ShoppingCartItem/ShoppingCartItem'

/* Instruments */
import { useSelector, selectCart, selectProducts } from '@/lib/redux'

import styles from './shoppingCart.module.css'

interface ProductData {
  quantity: number;
  price: number;
}

interface ProductsInCart {
  cartItems: Record<string, number>;
  cartTotalPrice: number;
  isOpen: boolean;
  cartTotalQuantity: number;
}

interface AllProducts {
  items: Record<string, ProductData>;
}

export const ShoppingCart = () => {
  const cart: ProductsInCart = useSelector(selectCart);
  const {items: products}: AllProducts = useSelector(selectProducts);   

  return (
    <aside className={`${styles.aside} ${cart.isOpen ? styles.open : styles.closed}`}>
      <h3>Shopping Cart</h3>
      <div className={styles.container}>
        {Object.keys(cart.cartItems).map((productName) => {
            const productInfo = products[productName];    
            if (productInfo) {
              return <ShoppingCartItem key={productName} productName={productName} productData={productInfo} orderedAmount={cart.cartItems[productName]}/>;
            }
            return null;
        })}
      </div>
      <div><span>Total amount: </span>{cart.cartTotalQuantity}</div>
      <div><span>Total cost: </span><strong>${cart.cartTotalPrice}</strong></div>
      <div className={styles.submit}><CustomButton title="Submit Order" type="submit" isDisabled={!cart.cartTotalQuantity}/></div>
    </aside>
  )
};
