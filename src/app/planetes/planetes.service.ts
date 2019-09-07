import { planetes } from "./models/mock-planetes";
import { Planete } from "./models/planete";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PlanetesService {
  dataChanged = new Subject();

  planetes: Planete[] = planetes;
  constructor() {}

  getPlanete(id: number): Observable<Planete> {
    return of(
      this.planetes[this.planetes.findIndex(planete => planete.id == id)]
    );
  }

  getAll(): Observable<Planete[]> {
    return of(this.planetes);
  }

  update(updatedPlanete: Planete): Observable<boolean> {
    this.planetes[
      this.planetes.findIndex(planete => planete.id == updatedPlanete.id)
    ] = updatedPlanete;
    return of(true);
  }
}
