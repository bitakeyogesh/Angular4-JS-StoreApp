import { Order } from "./order";
import { CartService } from "./cart.service";
import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {

    constructor(private cartService: CartService) { }

    public submitOrder(order: Order) {

        console.log(JSON.stringify(order));
        console.log(JSON.stringify(this.cartService.items));

        this.cartService.clear();
    }
}