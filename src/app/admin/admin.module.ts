import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { AuthComponentGuard } from "./auth.guard";
import { ModelModule } from "../model/model.module";

@NgModule(
    {
        declarations: [AuthComponent, AdminComponent],
        imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpModule,
            RouterModule.forChild([
                { path: "auth", component: AuthComponent },
                {
                    path: "main", component: AdminComponent,
                    canActivate: [AuthComponentGuard]
                },
                { path: "**", redirectTo: "auth" }
            ]), ModelModule],
        providers: [AuthComponentGuard],
        exports: [AuthComponent, AdminComponent]
    }
)
export class AdminModule {
}    