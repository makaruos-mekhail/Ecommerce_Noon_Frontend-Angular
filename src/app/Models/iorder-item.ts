import { IOrder } from "./iorder";
import { IProduct } from "./iproduct";

export interface IOrderItem {
    Id: number;
    Price: number;
    PaymentMethod: string;
    Address: string;
    AddressAr: string;
    OrderId: number;
    Order: IOrder;
    Product: IProduct;

}
