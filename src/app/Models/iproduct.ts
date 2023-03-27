import { IBrand } from "./ibrand";
import { ICategory } from "./icategory";
import { IOrder } from "./iorder";
import { IProductColor } from "./iproduct-color";
import { IProductImage } from "./iproduct-image";
import { IReview } from "./ireview";

export interface IProduct {
    id: number;
    name: string;
    nameAr: string;
    description: string;
    descriptionAr: string;
    price: number;
    sizes?: string;
    imagePath: string;
    rate: number;
    category: number;
    brand?: number;
    orderItems?: number;
    productColors: IProductColor[];
    productImages: IProductImage[];
    productReview: IReview[];
}
