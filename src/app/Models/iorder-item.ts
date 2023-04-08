import { IOrder } from "./iorder";
import { IProduct } from "./iproduct";

export interface IOrderItem {
    id: number;
    quantity: number;
    price : number;
    // product: IProduct;
    // order: IOrder;
}
