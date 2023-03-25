import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  ProductList: IProduct[];
  constructor() {
    this.ProductList = [
      {
        id: 1,
        Name: 'IPhone 14 Pro',
        NameAr: '  ايفون 14 برو',
        Description : 'IPhone 14 Pro is the most popular product',
        DescriptionAr: '  ايفون 14 برو',
        Price: 45000,
        Sizes:'14 inch & 32 RAM',
        ImagePath :'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        Rate: 3.1,
        ProductCategoryId: 1,
        // Brand: IBrand,
        // Category: ICategory,
        // Orders: IOrder[],
        WishListId: 1,
        // WishList: IWishList,
        // ProductColors: IProductColor[],
        // ProductImages: IProductImage[],
        // ProductReview: IReview[],
      },
      {
        id: 2,
        name: 'Samsung S20 Ultra',
        quantity: 0,
        discount: 5499,
        price: 5400,
        img: 'https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-s22-bora-purple-128-gb-sms901ulvv?wid=465&hei=465&fmt=webp',
        categroyid: 1,
      },
      {
        id: 3,
        name: 'LG LED Smart',
        quantity: 4,
        discount: 10499,
        price: 10000,
        img: 'https://m.media-amazon.com/images/I/71Oy86VIHbL.jpg',
        categroyid: 2,
      },
      {
        id: 4,
        name: 'Sony BRAVIAUltra HD',
        quantity: 3,
        discount: 15499,
        price: 15300,
        img: 'https://www.sony.co.in/image/f2c6487074ea1880e9a080c798d01ee5?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
        categroyid: 2,
      },
      {
        id: 5,
        name: 'LapTop Dell Latitude',
        quantity: 2,
        discount: 25499,
        price: 25269,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjUxjkWR_a2zN-XSOPO-p8Vx7KqWZgCAdHg&usqp=CAU',
        categroyid: 3,
      },
      {
        id: 6,
        name: 'LapTop Acer Nitro',
        quantity: 1,
        discount: 22499,
        price: 22433,
        img: 'https://images.acer.com/is/image/acer/Nitro5_AN515-57_Backliton_RGB-Black_01a-1?$Product-Cards-XL$',
        categroyid: 3,
      },
    ];
  }
}
