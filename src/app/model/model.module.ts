import { NgModule } from "@angular/core";
import { ProductService } from "./product.service";
import { ProductDataSource } from "./product.datasourse";
import { CartService } from "./cart.service";
import { OrderService } from "./order.service";
import { HttpModule } from "@angular/http";
import { ProductRestService } from "./productrest.service";
import { OrderRestService } from "./orderrest.service";
import { AuthService } from "./auth.service";

@NgModule(
    {
        providers: [
            { provide: ProductService, useClass: ProductRestService },
            ProductDataSource, CartService, 
            { provide: OrderService, useClass : OrderRestService},
            AuthService
        ],
        imports: [HttpModule]
    }
)
export class ModelModule { }

