import { IBrand } from "./ibrand";
import { ICategory } from "./icategory";
import { IOrder } from "./iorder";
import { IProductColor } from "./iproduct-color";
import { IProductImage } from "./iproduct-image";
import { IReview } from "./ireview";
import { IWishList } from "./iwish-list";

export interface IProduct {
    Id: number;
    Name: string;
    NameAr: string;
    Description: string;
    DescriptionAr: string;
    Price: number;
    Sizes?: string;
    ImagePath: string;
    Rate?: number;
    ProductCategoryId: number;
    Brand: IBrand;
    Category: ICategory;
    Orders: IOrder[];
    WishListId: number;
    WishList: IWishList;
    ProductColors: IProductColor[];
    ProductImages: IProductImage[];
    ProductReview: IReview[];
}
