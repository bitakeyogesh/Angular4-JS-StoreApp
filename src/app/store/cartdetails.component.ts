import { Component } from "@angular/core";
import { CartService, CartItem } from "../model/cart.service";
import { Product } from "../model/product";

@Component(
    {
        selector: "cart-details",
        templateUrl: "cartdetails.component.html"
    })
export class CartDetailsComponent {

    constructor(public cartService: CartService) { }

    public updateProductToCart(product: Product, quantity): void {

        this.cartService.updateProductToCart(product, Number(quantity));
    }

    public removeProductFromCart(id: number): void {

        this.cartService.removeProductFromCart(id);
    }

    public get items(): Array<CartItem> {

        return this.cartService.items;
    }

    public clear(): void {

        this.cartService.clear();
    }
}