import { IProduct } from "./iproduct";
import { IUser } from "./iuser";

export interface IReview {
    id: number;
    review: string;
    user: IUser;
    product: IProduct;
}
