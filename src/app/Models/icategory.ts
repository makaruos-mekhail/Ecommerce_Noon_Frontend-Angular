import { IProduct } from "./iproduct";
import { ItemStatus } from "./item-status";

export interface ICategory {
    Id: number;
    Name: string;
    NameAr: string;
    ParentCategory?: ICategory;
    SubCategories: ICategory[];
    Status: ItemStatus;
    Products: IProduct[];
}
