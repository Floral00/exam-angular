import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../models/restaurant";

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

  public getMoyenne(restaurant: Restaurant): number {

    var somme_note = 0;
    for(var i in restaurant.evaluations) {
      somme_note += restaurant.evaluations[i].notation;
    }
  }
}
