import { IOrderItem } from "./iorder-item";
import { IProduct } from "./iproduct";
import { IUser } from "./iuser";

export interface IOrder {
    Id: number;
    IsClosed: boolean;
    ProductId: number;
    Quantity: number;
    TotalPrice: number;
    Discount?: number;
    Product: IProduct[];
    OrderItems: IOrderItem[];
    UserId: number;
    User: IUser;


}
