import { IBrand } from "./ibrand";
import { ICategory } from "./icategory";
import { IOrder } from "./iorder";
import { IProductColor } from "./iproduct-color";
import { IProductImage } from "./iproduct-image";
import { IReview } from "./ireview";
import { IWishList } from "./iwish-list";

export interface IProduct {
    id: number;
    Name: string;
    NameAr: string;
    Description: string;
    DescriptionAr: string;
    Price: number;
    Sizes?: string;
    ImagePath: string;
    Rate?: number;
    ProductCategoryId: number;
    BrandId: number;
    CategoryID: number;
    OrdersID: number
    WishListId: number;
    ProductColorsID: number;
    ProductImagesURL: string[];
    ProductReviewID: string;
}
