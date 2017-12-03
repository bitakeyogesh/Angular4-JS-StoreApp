import { Component } from "@angular/core";  
import { Router } from "@angular/router";
import { ProductService } from "../model/product.service";
import { Product } from "../model/product";
import { AuthService } from "../model/auth.service";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
    templateUrl: "admin.component.html"
})
export class AdminComponent {

    public productId: number;
    public statusCode: number;

    public productFormGroup : FormGroup  = new FormGroup({
        name : new FormControl("", Validators.required),
        category : new FormControl("", Validators.required),
        description : new FormControl("", Validators.required),
        price : new FormControl("", Validators.required)
    });

    constructor(
        private productService: ProductService,
        private authService: AuthService,
        private router: Router) { }

    public get products(): Array<Product> {

        return this.productService.getProducts();
    }

    public getProductById(id: number): void {

        let product: Product = this.productService.getProductById(id);
        this.productFormGroup.setValue({
            name : product.name,
            category: product.category,
            description : product.description,
            price : product.price
        });
        this.productId = id;
    }

    public removeProductById(id: number): void {

        this.productService.deleteProduct(id).subscribe(
            status => {
                this.statusCode = status;
                this.productService.getAsyncProducts();
            }
        );
    }

    public saveOrUpdateProduct(): void {

        if (this.productId == null || this.productId == 0) {

            this.productService.addProduct(this.productFormGroup.value).subscribe(
                status => {
                    this.statusCode = status;
                    this.productService.getAsyncProducts();
                    this.backToAddForm();
                }
            );
        } else {

            let p : Product = this.productFormGroup.value;
            p.id = this.productId;
            this.productService.updateProduct(p).subscribe(
                status => {
                    this.statusCode = status;
                    this.productService.getAsyncProducts();
                    this.backToAddForm();
                }
            );
        }
    }

    logout(): void {
        this.authService.authToken = null;
        this.router.navigateByUrl("/");
    }

    private backToAddForm() : void {
        this.productId = null;
        this.productFormGroup.reset();
    }
}