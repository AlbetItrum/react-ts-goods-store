import * as React from "react";
import { useState, useRef, useEffect } from "react";
import data from "../../data";
import { Products } from "../App/type/types";
import Cards from "../Cards/Cards";
import "../loader.css";

// filtering products by text in the search
const filterProducts = (
  searchText: string,
  listOfProducts: Products[]
): Products[] => {
  return listOfProducts.filter(({ title }: Products) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  );
};
// product search navigation
const Navigation: React.FC = () => {
  const [productList, setProductList] = useState<Products[]>(data);
  const refLoader = useRef<null | HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loaderElem: HTMLDivElement =
      refLoader && (refLoader.current as HTMLDivElement);
    // adding a download when searching for products
    if (loaderElem) {
      loaderElem.style.display = "flex";
    }
    // preservation of filtered products
    const filterDelay = setTimeout(() => {
      const filterProduct = filterProducts(searchTerm, data);
      setProductList(filterProduct);
      if (loaderElem) {
        loaderElem.style.display = "none";
      }
    }, 500);
    return () => clearTimeout(filterDelay);
  }, [searchTerm]);

  return (
    <div>
      <div className="count-box">
        <div className="search-term">
          <h3>Поиск</h3>
          <input
            value={searchTerm}
            type="text"
            placeholder="Введите название"
            onChange={(event) => setSearchTerm(event.target.value)}
            className="input-search-term"
          />
        </div>
        <div className="lds-ellipsis" ref={refLoader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul className="ul-search-term">
        <Cards productList={productList} />
      </ul>
    </div>
  );
};

export default Navigation;
