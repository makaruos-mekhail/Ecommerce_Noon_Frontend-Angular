import { IProduct } from "./iproduct";

export interface IBrand {
    Id: number;
    Name: string;
    NameAr: string;
    Products: IProduct[];
}
