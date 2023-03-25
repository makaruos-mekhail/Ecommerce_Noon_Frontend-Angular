import { IProduct } from "./iproduct";
import { IUser } from "./iuser";

export interface IReview {
    Id: number;
    Review: string;
    ReviewAr: string;
    Rate: string;
    UserId: number;
    User: IUser;
    ProductId: number;
    Product: IProduct;
}
