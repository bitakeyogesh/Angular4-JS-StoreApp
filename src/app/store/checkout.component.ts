import { Component } from "@angular/core";
import { OrderService } from "../model/order.service";
import { Order } from "../model/order";
import { NgForm } from "@angular/forms/src/directives/ng_form";

@Component(
    {
        selector: "checkout",
        templateUrl: "checkout.component.html",
        styleUrls: ["checkout.component.css"]
    })
export class CheckoutComponent {

    public orderSent: boolean = false;
    public submitted: boolean = false;

    public order: Order = new Order();

    constructor(private orderService: OrderService) { }

    public submitForm(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.orderService.submitOrder(this.order);
            this.orderSent = true;
            this.submitted = false;
        }
    }
}