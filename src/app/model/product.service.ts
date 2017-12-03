import { Injectable } from "@angular/core";

import { ProductDataSource } from "./product.datasourse";
import { Product } from "./product";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {

    constructor(private productDataSource: ProductDataSource) { }

    public getProducts(selectedCategory: string = null): Array<Product> {

        return this.productDataSource.getProducts().filter(
            product => (selectedCategory == null) || (product.category == selectedCategory));
    }

    public getCategories(): Array<string> {

        return this.productDataSource.getProducts().map(product => product.category)
            .filter((category, index, categories) => categories.indexOf(category) == index).sort();
    }

    public getProductById(pid: number): Product {

        return this.productDataSource.getProducts().find(product => product.id == pid);
    }

    public addProduct(product: Product): Observable<number> {
        return;
    }

    public updateProduct(product: Product): Observable<number> {
        return;
    }

    public deleteProduct(id: number): Observable<number> {
        return;
    }

    public getAsyncProducts(): void { }
}