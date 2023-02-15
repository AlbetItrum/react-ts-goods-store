import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CartHeader from "../CartHeader/CartHeader";
import Product from "../Product/Product";
import { Products } from "../App/type/types";
import { CardProps, IArrayImg } from "./type/types";

// card display component
// the function gets the whole list of products
const Cards = ({ productList }: CardProps) => {
  const [cart, setCart] = useState<Products[]>(productList);
  const [total, setTotal] = useState({
    price: cart.reduce((acc: number, el: Products) => acc + el.priceTotal, 0),
    count: cart.reduce((acc: number, el: Products) => acc + el.count, 0),
  });
  const [imgArr, setImgArr] = useState<IArrayImg[]>([]);
  const refCart = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setCart(productList);
  }, [productList]);

  useEffect(() => {
    setTotal({
      price: cart.reduce((acc: number, el: Products) => acc + el.priceTotal, 0),
      count: cart.reduce((acc: number, el: Products) => acc + el.count, 0),
    });
  }, [cart]);

  useEffect(() => {
    try {
      axios.get("https://api.escuelajs.co/api/v1/products").then(({ data }) => {
        setImgArr(data);
      });
    } catch (e) {
      console.log(e, "Error");
    }
  }, []);

  const increase = (e: React.BaseSyntheticEvent, id: number) => {
    //the function of adding a product and changing the price
    e.stopPropagation(); //stops further transmission of the current event
    setCart((cart): Products[] => {
      return cart.map((product, index) => {
        const targetElem: HTMLDivElement | null = refCart.current;
        if (targetElem) {
          const targetCardBackgroungColor = targetElem.querySelectorAll(
            ".product"
          )[index] as unknown as HTMLDivElement;
          if (product.id === id) {
            if (product.count >= 0) {
              //changing the color of the card when finishing
              targetCardBackgroungColor.style.background = "#009969";
            }
            if (product.totalNumber !== product.count) {
              return {
                ...product,
                count: ++product.count, //changing the total number of items added
                priceTotal: product.count * product.price, //change in the total price when updating
              };
            }
          }
        }
        return product;
      });
    });
  };

  const decrease = (e: React.BaseSyntheticEvent, id: number) => {
    //removal function and price change
    e.stopPropagation(); //Stops further transmission of the current event
    setCart((cart): Products[] => {
      return cart.map((product, index) => {
        const targetElem: HTMLDivElement | null = refCart.current;
        if (targetElem) {
          const targetCardBackgroungColor = targetElem.querySelectorAll(
            ".product"
          )[index] as unknown as HTMLDivElement;
          if (product.id === id) {
            if (product.count <= 1) {
              //changing the color when the element is removed
              targetCardBackgroungColor.style.background = "#00483f";
            }
          }
          return {
            ...product,
            count: product.count - 1 >= 0 ? --product.count : product.count, //changing the total number of items added
            priceTotal: product.count * product.price, // change it the total price when deleting an object
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((products: Products, index: number) => {
    return (
      <Product
        products={products}
        key={products.id}
        increase={increase}
        decrease={decrease}
        imgSrc={imgArr[index]?.category.image}
      />
    );
  });

  return (
    <div className="content-cart">
      <CartHeader count={total.count} price={total.price} />
      <div className="cart" ref={refCart}>
        {products}
      </div>
    </div>
  );
};

export default Cards;
