import { IProduct } from "./iproduct";

export interface IProductColor {
    Id: number;
    Name: string;
    HexValue: string;
    ProductId: number;
    Product: IProduct;

}
