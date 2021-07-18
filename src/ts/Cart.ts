import Buyable from './Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  amount() {
    return this.items.reduce((total, el) => total + el.price, 0);
  }

  discountedAmount(discount: number) {
    return this.amount() - (this.amount() / 100) * discount;
  }

  removeItem(id: number): void {
    const findItem: any = this._items.find((el) => el.id === id);
    this._items.splice(this._items.indexOf(findItem), 1);
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}
