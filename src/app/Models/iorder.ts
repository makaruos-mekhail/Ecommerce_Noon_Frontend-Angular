import { IOrderItem } from "./iorder-item";
import { IUser } from "./iuser";

export interface IOrder {

    username: string;
    orderItemsDTO:IOrderItem[];
    totalPrice: number;
    paymentMethod :string;
}
