import { IOrder } from "./iorder";
import { IReview } from "./ireview";
import { IWishList } from "./iwish-list";


export interface IUser {
    firstName: string;
    firstNameAr: string;
    email:string
    lastName: string;
    lastNameAr: string;
    address: string;
    addressAr: string;
    city: string;
    cityAr: string;
    country: string;
    countryAr: string;
    postalCode?: string;
    phone: string;
    orders?: IOrder[];
    reviews?: IReview[];
    wishListId?: IWishList;
}
