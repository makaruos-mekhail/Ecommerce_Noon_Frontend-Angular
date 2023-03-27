import { IProduct } from "./iproduct";

export interface IBrand {
    id: number;
    name: string;
    nameAr: string;
    products?: IProduct[];
}
