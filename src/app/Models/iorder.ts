import { IOrderItem } from "./iorder-item";
import { IUser } from "./iuser";

export interface IOrder {
    id: number;
    address: string;
    // addressAr: string;
    totalPrice: number;
    discount?: number;
    paymentMethod :string;
    orderItems:IOrderItem[];
    user:IUser;
}
