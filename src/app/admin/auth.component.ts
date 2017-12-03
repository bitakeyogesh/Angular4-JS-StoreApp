import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Component({
    templateUrl: "auth.component.html"
})
export class AuthComponent {

    public errorMessage: string = null;
    public username: string;
    public password: string;
    private authToken: string;

    constructor(private authService: AuthService,
        private router: Router) { }

    public submitForm(form: NgForm) {

        if (form.valid) {
            this.authService.authenticate(this.username, this.password)
                .subscribe(
                    status => {
                        if (status) {
                            this.router.navigateByUrl("/admin/main");
                        } else {
                            this.errorMessage = "Invalid Credentials"
                        }
                    }
                );
        } else {
            this.errorMessage = "Form is Invalid";
        }
    }
}