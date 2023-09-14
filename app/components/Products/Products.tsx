"use client";

/* Components */
import { ProductCard } from "@/app/components/ProductCard/ProductCard";

/* Instruments */
import { useEffect, useState } from "react";
import {
  useSelector,
  useDispatch,
  selectCart,
  cartSlice,
  selectProducts,
} from "@/lib/redux";
import { fetchProducts } from "@/lib/redux";

import styles from "./products.module.css";

interface ProductData {
  quantity: number;
  price: number;
}

interface Product {
  productName: string;
  productData: ProductData;
}

export const Products = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProducts());
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const { items: products } = useSelector(selectProducts);
  const productsArr: { productName: string; productData: ProductData }[] = [];
  for (let [key, value] of Object.entries(products)) {
    productsArr.push({ productName: key, productData: value });
  }

  const cart = useSelector(selectCart);

  const handleAddToCart = (
    product: Product,
    cart: { cartTotalPrice: number }
  ) => {
    dispatch(cartSlice.actions.addToCart(product.productName));
    dispatch(
      cartSlice.actions.setTotalPriceState(
        cart.cartTotalPrice + product.productData.price
      )
    );
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Sorry, something went wrong...</div>
      ) : (
        <>
          <h2 className={styles.title}>List of available solar modules</h2>
          <div className={styles.container}>
            {productsArr?.map(({ productName, productData }) => (
              <ProductCard
                key={productName}
                productName={productName}
                productQuantity={productData.quantity}
                productPrice={productData.price}
                handleClick={() =>
                  handleAddToCart({ productName, productData }, cart)
                }
                isAdded={cart.cartItems[productName] ? true : false}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
