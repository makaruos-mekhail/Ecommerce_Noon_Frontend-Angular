import { IOrderItem } from "./iorder-item"
import { IUser } from "./iuser"
import { Orderitems } from "./orderitems"

export interface Orders {
    id:number
    address: string
    user: IUser
    discount: number;
    orderItems: Orderitems[]
    paymentMethod: string
    status: string
    isDeleted: string
    createdAt: Date
    userPhone: string;
    totalPrice: number;
    userId: number,



}
