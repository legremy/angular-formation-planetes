import { DashboardDetailsEditComponent } from "./planetes/dashboard-details-edit/dashboard-details-edit.component";
import { DashboardDetailComponent } from "./planetes/dashboard/dashboard-detail.component";
import { DashboardComponent } from "./planetes/dashboard/dashboard.component";
import { PlaneteFormComponent } from "./planetes/planete-form/planete-form.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlanetesModule } from "./planetes/planetes.module";

const routes: Routes = [
  { path: "planete/:id", component: PlaneteFormComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: ":id", component: DashboardDetailComponent },
      { path: ":id/edit", component: DashboardDetailsEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PlanetesModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
