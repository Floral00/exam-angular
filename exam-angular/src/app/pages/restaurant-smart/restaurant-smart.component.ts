import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../models/restaurant";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant-smart',
  templateUrl: './restaurant-smart.component.html',
  styleUrls: ['./restaurant-smart.component.css']
})
export class RestaurantSmartComponent implements OnInit {

  public restaurants: Restaurant[] = [];
  constructor( private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  private loadRestaurants(): void {
    this.restaurantService.getRestaurant().subscribe(value => this.restaurants = value);
  }

  public restaurantAdded(restaurant: Restaurant): void {
    this.restaurantService.addRestaurant(restaurant);
  }
}
