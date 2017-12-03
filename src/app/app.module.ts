import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductModule } from './store/product.module';
import { ProductComponent } from './store/product.component';
import { CartDetailsComponent } from './store/cartdetails.component';
import { CheckoutComponent } from './store/checkout.component';
import { ProductComponentGuard } from './product.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductModule,
    RouterModule.forRoot([
      {
        path: "product", component: ProductComponent,
        canActivate: [ProductComponentGuard]
      },
      {
        path: "cart", component: CartDetailsComponent,
        canActivate: [ProductComponentGuard]
      },
      {
        path: "checkout", component: CheckoutComponent,
        canActivate: [ProductComponentGuard]
      },
      {
        path: "admin", loadChildren: "app/admin/admin.module#AdminModule",
        canActivate: [ProductComponentGuard]
      },
      { path: "**", redirectTo: "product" }
    ])
  ],
  providers: [ProductComponentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


