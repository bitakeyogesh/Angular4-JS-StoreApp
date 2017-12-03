
import { Component } from "@angular/core";
import { CartService } from "../model/cart.service";

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {

    constructor(public cartService: CartService) { }
}