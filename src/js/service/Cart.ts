import Buyable from '../domain/Buyable';


export default class Cart {
    private _items: Buyable[] = [];
    private _discount: number = 0;

   add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    get sum(): number {
        return this._items.reduce((a: number, b: Buyable)=> a + b.price, 0)
    }

    calcDiscount(discount: number): void {
        this._discount = Math.ceil(this.sum * discount / 100)
    }

    get total(): number {
        return  this._discount;
    }

    deleteId(id: number): void {
        this._items = this._items.filter((el: Buyable)  => el.id !== id)
    }

    get idDel(): Buyable[] {
        return this._items;
    }

}
