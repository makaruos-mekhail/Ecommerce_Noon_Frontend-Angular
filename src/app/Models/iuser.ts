import { IOrder } from "./iorder";
import { IReview } from "./ireview";
import { IWishList } from "./iwish-list";


export interface IUser {
    firstName: string;
    email:string
    lastName: string;
    address: string;
    city: string;
    country: string;
    postalCode?: string;
    phone: string;
    orders?: IOrder[];
    reviews?: IReview[];
    wishListId?: IWishList;
}
