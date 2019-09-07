import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Planete } from "../models/planete";
import { PlanetesService } from "../planetes.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-dashboard-details-edit",
  template: `
    <form [formGroup]="form" (ngSubmit)="handleSubmit()">
      <div class="form-group">
        <input class="form-control" type="text" formControlName="name" />
      </div>
      <div class="form-group">
        <input class="form-control" type="text" formControlName="rank" />
      </div>
      <div class="form-group">
        <input class="form-control" type="text" formControlName="type" />
      </div>
      <div class="form-group">
        <input class="form-control" type="text" formControlName="image" />
      </div>
      <div class="form-group">
        <textarea class="form-control" formControlName="description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Modifier</button>
    </form>
  `,
  styles: []
})
export class DashboardDetailsEditComponent implements OnInit, OnDestroy {
  planete: Planete;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private s: PlanetesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.s.getPlanete(id).subscribe(planete => {
        this.planete = planete;
        this.initializeForm();
      }); // pour gérer l'initialisation quand l'observable est appelé
    });
    this.initializeForm(); // pour gérer l'initialisation avant que l'obsevable soit appelé
  }

  ngOnDestroy() {}

  initializeForm() {
    this.form = new FormGroup({
      name: new FormControl(this.planete && this.planete.name),
      rank: new FormControl(this.planete && this.planete.rank),
      type: new FormControl(this.planete && this.planete.type),
      image: new FormControl(this.planete && this.planete.image),
      description: new FormControl(this.planete && this.planete.description)
    });
    //initialisation du formulaire ForGroup etc
  }
  handleSubmit() {
    if (this.form.invalid) return;
    const planete = { ...this.planete, ...this.form.value };
    this.s.update(planete).subscribe(() => {
      this.s.dataChanged.next();
      this.router.navigateByUrl("/dashboard/" + planete.id);
    });
  }
}
