import {Evaluation} from "./evaluation";

export interface Restaurant {
  id: number,
  nom: String,
  adresse: String,
  evaluations: Evaluation[]
}
