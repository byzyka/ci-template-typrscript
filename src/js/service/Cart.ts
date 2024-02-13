import Buyable from '../domain/Buyable';

let totalPrice: number = 0;
let totalDiscount: number = 0;
let resalt: Buyable[] = [];

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    totalSum([]): void {

        this._items.forEach(el => {
            totalPrice += el.price;
        })

    }
    get sum(): number {
        return totalPrice;
    }

    calcDiscount(discount: number): void {
        this._items.forEach(el => {
            totalDiscount = Math.ceil(totalPrice * discount / 100)
        })
    }

    get discount(): number {
        return totalDiscount;
    }

    deleteId(id: number): void {
        resalt = this._items.filter(el => el.id !== id)
    }

    get idDel(): Buyable[] {
        return resalt;
    }

}
