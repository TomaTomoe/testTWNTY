/* Components */
import { CustomButton } from "@/app/components/CustomButton/CustomButton";

/* Instruments */
import { MouseEventHandler } from "react";

import styles from "./productCard.module.css";

interface IProps {
  productName: string;
  productQuantity: number;
  productPrice: number;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  isAdded: boolean;
}

export const ProductCard = ({
  productName,
  productQuantity,
  productPrice,
  handleClick,
  isAdded,
}: IProps) => {
  return (
    <div className={`${styles.wrapper}`}>
      <h4 className={`${styles.name}`}>{productName}</h4>
      <div className={`${styles.quantity}`}>
        Available amount: {productQuantity}
      </div>
      <div className={`${styles.price}`}>Price per unit: ${productPrice}</div>
      <CustomButton
        title="Add to Cart"
        handleClick={handleClick}
        isDisabled={isAdded}
      />
    </div>
  );
};
