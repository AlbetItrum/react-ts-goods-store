import { Products } from "../../App/type/types";

export interface ProductsProps {
  products: Products;
  ProductsProps?: ProductsProps;
  increase: (e: React.ChangeEvent |
    React.BaseSyntheticEvent,
    id: number) => void;
  decrease: (e: React.ChangeEvent |
    React.BaseSyntheticEvent,
    id: number) => void;
  changeValue?: string;
  imgSrc: string;
}

export interface IPropsCount {
  count: number;
  increase: (
    e: React.BaseSyntheticEvent,
    id: number
  ) => void;
  id: number;
  title: string;
  priceTotal: number;
  decrease: (
    e: React.BaseSyntheticEvent,
    id: number
  ) => void;
}