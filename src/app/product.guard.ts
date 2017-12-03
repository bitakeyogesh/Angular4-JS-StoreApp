import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { ProductComponent } from "./store/product.component";
import { ActivatedRoute } from "@angular/router";
import { RouterState } from "@angular/router";
import { Router } from "@angular/router";

@Injectable()
export class ProductComponentGuard {

    private firstNavigationFlag: boolean = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.firstNavigationFlag == true) {
            this.firstNavigationFlag = false;

            if (route.component != ProductComponent) {
                this.router.navigateByUrl("/product");
                return false;
            }
        }

        return true;
    }
}