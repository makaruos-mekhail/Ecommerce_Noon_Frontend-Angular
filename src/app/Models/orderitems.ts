import { IProduct } from "./iproduct"
import { Orders } from "./orders";

export interface Orderitems {
    id: number;       
    quantity: number;
    product: IProduct;
    productId: number;
    orderId: number;
    order?: Orders
}
