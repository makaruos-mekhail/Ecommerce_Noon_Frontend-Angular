import { IOrder } from "./iorder";
import { IProduct } from "./iproduct";

export interface IOrderItem {
    productid: number;
    quantity: number;
    price : number;
}
