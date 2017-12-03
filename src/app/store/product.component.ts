import { Component } from "@angular/core";
import { ProductService } from "../model/product.service";
import { Product } from "../model/product";
import { CartService } from "../model/cart.service";
import { Router } from "@angular/router";


@Component({
    selector: "app-store",
    templateUrl: "product.component.html"
})
export class ProductComponent {

    private selectedCategory: string;

    constructor(private productService: ProductService,
            private cartService : CartService,
            private router : Router) { }

    public get products(): Array<Product> {
        return this.productService.getProducts(this.selectedCategory);
    }
    
    public get categories(): Array<string> {
        return this.productService.getCategories();
    }

    public changeCategory(selectedCategory?: string): void {
        this.selectedCategory = selectedCategory;
    }

    public addProductToCart(product : Product) : void {
        this.cartService.addProductToCart(product);
        this.router.navigateByUrl("/cart");
    }
}