import { Order } from "./order";
import { CartService } from "./cart.service";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Headers } from "@angular/http";
import { RequestOptions } from "@angular/http";

@Injectable()
export class OrderRestService {

    private baseUrl = "http://localhost:3500/orders/";

    constructor(private http: Http,
        private cartService: CartService) { }

    public submitOrder(order: Order) {

        order.cartItems = this.cartService.items;

        let myheaders: Headers = new Headers([
            { 
                "Content-Type": "application/json" 
            }, {
                "Accept" : "application/json"
            }
        ]);
        let requestOptions: RequestOptions = new RequestOptions({
            headers: myheaders
        });

        this.http.post(this.baseUrl, order, requestOptions).subscribe(
            response => {
                console.log(response.status);
                console.log(response.json());
                this.cartService.clear();                
            }
        );
    }
}