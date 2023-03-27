import { IProduct } from "./iproduct";

export interface IProductColor {
    id: number;
    name: string;
    hexValue: string;
    Products: IProduct;
}
