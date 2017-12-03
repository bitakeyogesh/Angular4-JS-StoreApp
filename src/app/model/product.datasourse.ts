// Dummy Data
import {Injectable} from "@angular/core";

import { Product } from "./product";

@Injectable()
export class ProductDataSource {

    private products: Array<Product>;

    constructor() {

        this.products = [
            new Product(1, "Product1", "Category1", "Prodcut 1 (Category1)", 100),
            new Product(2, "Product2", "Category1", "Prodcut 2 (Category1)", 100),
            new Product(3, "Product3", "Category1", "Prodcut 3 (Category1)", 100),
            new Product(4, "Product4", "Category1", "Prodcut 4 (Category1)", 100),
            new Product(5, "Product5", "Category2", "Prodcut 5 (Category2)", 100),
            new Product(6, "Product6", "Category2", "Prodcut 6 (Category2)", 100),
            new Product(7, "Product7", "Category2", "Prodcut 7 (Category2)", 100),
            new Product(8, "Product8", "Category2", "Prodcut 8 (Category2)", 100),
            new Product(9, "Product9", "Category3", "Prodcut 9 (Category3)", 100),
            new Product(10, "Product10", "Category3", "Prodcut 10 (Category3)", 100),
            new Product(11, "Product11", "Category3", "Prodcut 11 (Category3)", 100),
            new Product(12, "Product12", "Category3", "Prodcut 12 (Category3)", 100),
        ];
    }

    public getProducts(): Array<Product> {
        
        return this.products;
    }
}