import Buyable from '../domain/Buyable';

export let totalPrice: number = 0;
export let totalDiscount: number = 0;
export let result: Buyable[] = [];


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
        result = this._items.filter(el => el.id !== id)
    }

    get idDel(): Buyable[] {
        return result;
    }

}
