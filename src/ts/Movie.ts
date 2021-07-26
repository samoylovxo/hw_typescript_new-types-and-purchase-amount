import Cart from './Cart';
import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly nameEn: string,
    readonly year: number,
    readonly country: string[],
    readonly tagline: string,
    readonly genre: string[],
    readonly time: number,
    readonly price: number,
    readonly imax: boolean
  ) {}
}

// cart.add(movieAvengers);
// cart.add(movieBlackWidow);
// cart.add(movieCruella);
// cart.add(movieQuietPlace2);

// console.log(cart.items);

// console.log(cart.removeItem(2));

// console.log(cart.items);

// console.log(cart.amount());
// console.log(cart.discountedAmount(10));
