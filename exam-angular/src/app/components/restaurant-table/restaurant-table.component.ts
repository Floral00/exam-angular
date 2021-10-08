import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../models/restaurant";
import {Evaluation} from "../../models/evaluation";

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  @Input() restaurants: Restaurant[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public getMoyenne(index: number): string {
    var somme_note = 0;
    if(this.restaurants[index].evaluations.length == 0) {
      return "/";
    }
    for( var i in this.restaurants[index].evaluations) {
      somme_note += this.restaurants[index].evaluations[i].etoiles;
    }
    var moyenne = somme_note / this.restaurants[index].evaluations.length
    return moyenne.toString();
  }
}
