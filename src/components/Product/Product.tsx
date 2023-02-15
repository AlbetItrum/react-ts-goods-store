import React, { useState } from "react";
import Count from "../Count/Count";
import { ProductsProps } from "./type/types";

// product card display
// the function accepts an object of card elements,
// an increase in the number of goods, a decrease in the number of goods,
const Product = ({ products, increase, decrease, imgSrc }: ProductsProps) => {
  const { priceTotal, title, count, id, price } = products;
  const totalSum = products.totalNumber - products.count;
  const [isActive, setIsActive] = useState(!products);
  // select a product by clicking on it
  const handleAddCard = (e: React.BaseSyntheticEvent, id: number) => {
    products.count === 0 ? increase(e, id) : console.log("no");
    products.count === 1 ? decrease(e, id) : console.log("no");
  };

  return (
    <div
      className="product"
      onClick={(e) => handleAddCard(e, id)}
      style={{
        backgroundColor: isActive ? "rgb(0, 153, 105)" : undefined,
      }}
    >
      <div className="product-img">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="product-controls">
        <div className="product-title">
          <p>Product name : {title}</p>
        </div>

        <div className="price">
          <p>Prise: {price}</p>
        </div>

        <div className="total">
          <p>Number of products: {totalSum}</p>
        </div>
      </div>
      <div className="count-all">
        <div className="product-count">
          <Count
            count={count}
            increase={increase}
            id={id}
            title={title}
            priceTotal={priceTotal}
            decrease={decrease}
          />
        </div>
        <div className="product-price">{priceTotal} руб.</div>
      </div>
    </div>
  );
};

export default Product;
