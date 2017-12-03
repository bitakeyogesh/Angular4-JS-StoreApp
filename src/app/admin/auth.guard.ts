import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Injectable()
export class AuthComponentGuard {

    constructor(private authService: AuthService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.authService.authenticated) {

            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    }
}