import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { ProductService } from "../model/product.service";
import { CartSummaryComponent } from "./cartsummary.component";
import { CartDetailsComponent } from "./cartdetails.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
  
  
@NgModule({
    declarations: [ProductComponent, CartSummaryComponent, CartDetailsComponent, CheckoutComponent],
    imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
    exports: [ProductComponent, CartDetailsComponent, CheckoutComponent]
})
export class ProductModule {
}




