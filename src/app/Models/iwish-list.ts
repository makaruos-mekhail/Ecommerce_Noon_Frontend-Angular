import { IProduct } from "./iproduct";
import { IUser } from "./iuser";

export interface IWishList {
  id: 1,
  products?: IProduct[],
  userId: number;
  user: IUser;
}
