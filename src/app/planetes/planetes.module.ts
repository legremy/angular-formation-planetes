import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { PlaneteFormComponent } from "./planete-form/planete-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { DashboardDetailComponent } from "./dashboard/dashboard-detail.component";
import { DashboardDetailsEditComponent } from "./dashboard-details-edit/dashboard-details-edit.component";

@NgModule({
  declarations: [
    PlaneteFormComponent,
    DashboardComponent,
    DashboardDetailComponent,
    DashboardDetailsEditComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class PlanetesModule {}
