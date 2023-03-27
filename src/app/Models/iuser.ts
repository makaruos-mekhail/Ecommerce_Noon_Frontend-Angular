import { IOrder } from "./iorder";
import { IReview } from "./ireview";
import { IWishList } from "./iwish-list";
import { UserStatus } from "./user-status";
import { UserType } from "./user-type";

export interface IUser {
    FirstName: string;
    FirstNameAr: string;
    LastName: string;
    LastNameAr: string;
    Address: string;
    AddressAr: string;
    City: string;
    CityAr: string;
    Country: string;
    CountryAr: string;
    PostalCode?: string;
    Phone: string;
    Orders: IOrder[];
    Reviews: IReview[];
    WishListId: number;
    WishList: IWishList;
    CreationDateTime: Date;
    UserStatus: UserStatus;
    UserType: UserType;



}
