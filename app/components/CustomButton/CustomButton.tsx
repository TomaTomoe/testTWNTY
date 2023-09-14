"use client"

/* Instruments */
import { MouseEventHandler } from 'react'

import styles from './customButton.module.css'

interface IProps {
  title?: string | number;
  type?: "button" | "submit" | "reset";
  classNames?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnIcon?: string;
  isDisabled?: boolean
}

export const CustomButton = ({title, classNames, handleClick, btnIcon, isDisabled = false, type = 'button'}: IProps) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={`${styles.btn} ${isDisabled ? styles.disabled : ''} ${classNames}`}
      onClick={handleClick}
    >
      {btnIcon && (
          <img
            src={btnIcon}
            className={`${styles.image}`}
            alt="button icon"
          />
      )}
      <span>
        {title}
      </span>
    </button>
  )
}
