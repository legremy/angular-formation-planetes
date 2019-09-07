import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { PlanetesService } from "../planetes.service";
import { Planete } from "../models/planete";

@Component({
  selector: "app-dashboard",
  template: `
    <div class="row">
      <div class="col-4">
        <div class="list-group">
          <a
            routerLink="/dashboard/{{ p?.id }}"
            routerLinkActive="active"
            *ngFor="let p of planetes"
            class="list-group-item"
          >
            {{ p.name }}
          </a>
        </div>
      </div>
      <div class="col-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {
  planetes: Planete[] = [];
  urlId: number = 1;

  constructor(
    private service: PlanetesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => console.log(params));
    this.service.dataChanged.subscribe(() => {
      this.service.getAll().subscribe(planetes => (this.planetes = planetes));
    });
    this.service.getAll().subscribe(planetes => (this.planetes = planetes));
  }
}
