import { IProduct } from "./iproduct";

export interface IProductImage {
    Id: number;
    ImagePath: string;
    ProductId: number;
    Product: IProduct;

}
