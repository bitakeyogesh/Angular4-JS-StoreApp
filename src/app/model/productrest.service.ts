import { Product } from "./product";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Headers } from "@angular/http";
import { RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { AuthService } from "./auth.service";

@Injectable()
export class ProductRestService {

    private baseUrl = "http://localhost:3500/products/";
    private products: Array<Product> = [];

    constructor(private http: Http,
        private authService: AuthService) {

        let myheaders: Headers = new Headers([{ "Accept": "application/json" }]);

        let requestOptions: RequestOptions = new RequestOptions({
            headers: myheaders
        });

        http.get(this.baseUrl, requestOptions).subscribe(
            response => {
                this.products = response.json();
            }
        );
    }

    public getProducts(selectedCategory: string = null): Array<Product> {

        return this.products.filter(
            product => (selectedCategory == null) || (product.category == selectedCategory));
    }

    public getAsyncProducts(): void {

        let myheaders: Headers = new Headers([{ "Accept": "application/json" }]);

        let requestOptions: RequestOptions = new RequestOptions({
            headers: myheaders
        });

        this.http.get(this.baseUrl, requestOptions).subscribe(
            response => {
                this.products = response.json();
            }
        );
    }

    public getCategories(): Array<string> {
        return this.products.map(product => product.category)
            .filter((category, index, categories) => categories.indexOf(category) == index).sort();
    }

    public getProductById(pid: number): Product {

        return this.products.find(product => product.id == pid);
    }


    public addProduct(product: Product): Observable<number> {

        let myheaders: Headers = new Headers([
            {
                "Content-Type": "application/json"
            }, {
                "Accept": "application/json"
            }
        ]);

        if (this.authService.authToken != null) {

            myheaders.append("authorization",
                `Bearer<${this.authService.authToken}>`)
        }
        let requestOptions: RequestOptions = new RequestOptions({
            headers: myheaders
        });

        return this.http.post(this.baseUrl, product, requestOptions)
            .map(response => {
                return response.status;
            });
    }

    public updateProduct(product: Product): Observable<number> {

        let myheaders: Headers = new Headers([
            {
                "Content-Type": "application/json"
            }, {
                "Accept": "application/json"
            }
        ]);

        if (this.authService.authToken != null) {

            myheaders.append("authorization",
                `Bearer<${this.authService.authToken}>`)
        }
        let requestOptions: RequestOptions = new RequestOptions({
            headers: myheaders
        });

        return this.http.put(this.baseUrl + product.id, product, requestOptions)
            .map(response => {
                return response.status;
            });
    }

    public deleteProduct(id: number): Observable<number> {

        let myheaders: Headers = new Headers();

        if (this.authService.authToken != null) {

            myheaders.append("authorization",
                `Bearer<${this.authService.authToken}>`)
        }
        let requestOptions: RequestOptions = new RequestOptions({
            headers: myheaders
        });

        return this.http.delete(this.baseUrl + id, requestOptions)
            .map(response => {
                return response.status;
            });
    }
}