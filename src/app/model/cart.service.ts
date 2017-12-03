import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()
export class CartService {

    public items: Array<CartItem> = [];
    public itemCount: number = 0;
    public total: number = 0;

    public addProductToCart(product: Product, quantity: number = 1): void {

        let item: CartItem = this.items.find(item => item.product.id == product.id);
        if (item != undefined) {
            item.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
        this.recalculate();
    }

    public updateProductToCart(product: Product, quantity: number): void {

        let item: CartItem = this.items.find(item => item.product.id == product.id);
        if (item != undefined) {
            item.quantity = Number(quantity);
        }
        this.recalculate();
    }

    public removeProductFromCart(id: number): void {

        let index: number = this.items.findIndex(item => item.product.id == id);
        this.items.splice(index, 1);
        this.recalculate();
    }

    public clear(): void {

        this.items = [];
        this.itemCount = 0;
        this.total = 0;
    }

    private recalculate(): void {

        this.itemCount = 0;
        this.total = 0;
        this.items.forEach(item => {
            this.itemCount += item.quantity;
            this.total += item.subTotal;
        });
    }
}

export class CartItem {

    constructor(public product: Product, public quantity: number) { }

    public get subTotal(): number {

        return this.product.price * this.quantity;
    }
}