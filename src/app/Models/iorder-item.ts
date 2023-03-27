import { IOrder } from "./iorder";
import { IProduct } from "./iproduct";

export interface IOrderItem {
    id: number;
    quantity: number;
    product: IProduct;
    order: IOrder;
}
