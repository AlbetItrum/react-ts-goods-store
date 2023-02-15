import React from "react";
import { ITotal } from "./type/types";

// site menu component
// the function takes the number of items selected and the total cost
const CartHeader = ({ count, price }: ITotal) => {
  return (
    <div className="cart-footer">
      <div className="cart-footer-count">
        Количество выбранных товаров: {count} шт.
      </div>
      <div className="cart-footer-price">
        Общая стоимость выбранных товаров: {price} руб.
      </div>
    </div>
  );
};

export default React.memo(CartHeader);
