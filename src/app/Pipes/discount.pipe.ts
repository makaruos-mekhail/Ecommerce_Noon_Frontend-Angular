import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountpipe'
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, discount: number): number {
    discount = discount / 100;
    var res =Math.ceil (price / (1 - discount));
    return (res);
  }

}
