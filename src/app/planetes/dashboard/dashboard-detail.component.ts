import { Component, OnInit, OnDestroy } from "@angular/core";
import { PlanetesService } from "../planetes.service";
import { ActivatedRoute } from "@angular/router";
import { Planete } from "../models/planete";
import { map, switchMap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dashboard-detail",
  templateUrl: "dashboard-details.html",
  styles: []
})
export class DashboardDetailComponent implements OnInit, OnDestroy {
  planete: Planete;
  planeteSubscription: Subscription;
  constructor(private s: PlanetesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => console.log(params));
    /* this.route.paramMap.subscribe(params => {
      const id = +params.get("id");
      console.log(id);
      this.s.getPlanete(id).subscribe(planete => (this.planete = planete));
    }); */

    this.planeteSubscription = this.route.paramMap
      .pipe(
        map(params => +params.get("id")),
        switchMap(id => this.s.getPlanete(id))
      )
      .subscribe(planete => (this.planete = planete));
  }

  ngOnDestroy(): void {
    this.planeteSubscription.unsubscribe();
  }
}
