import { PlanetesService } from "./../planetes.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Planete } from "../models/planete";

@Component({
  selector: "app-planete-form",
  templateUrl: "./planete-form.component.html",
  styleUrls: ["./planete-form.component.css"]
})
export class PlaneteFormComponent implements OnInit {
  planete: Planete;
  form: FormGroup;

  constructor(private s: PlanetesService) {}

  ngOnInit() {
    this.s.getPlanete(1).subscribe(planete => (this.planete = planete));
    this.form = new FormGroup({
      name: new FormControl(this.planete.name),
      rank: new FormControl(this.planete.rank),
      type: new FormControl(this.planete.type),
      image: new FormControl(this.planete.image)
    });
  }
}
