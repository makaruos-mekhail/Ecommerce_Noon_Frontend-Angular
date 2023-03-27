import { IProduct } from "./iproduct";

export interface ICategory {
    id: number;
    name: string;
    nameAr: string;
    parentCategory?:ICategory ;
    subCategories?: ICategory[];
    products?: IProduct[];
}
