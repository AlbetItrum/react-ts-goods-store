import { Products } from '../../App/type/types'

export interface CardProps {
    productList: Array<Products>;
}

export interface ICategory {
    id: number;
    name: string;
    image: string;
}

export interface IArrayImg {
    category: ICategory;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
}