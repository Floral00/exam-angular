import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Restaurant} from "../../models/restaurant";
import {BigInteger} from "@angular/compiler/src/i18n/big_integer";

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  @ViewChild("form", {static: true}) form?: NgForm;

  @Output() RestaurantAdded = new EventEmitter<Restaurant>();

  public restaurant: Restaurant = {
    id: 0,
    nom: "",
    adresse: "",
    evaluations: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.form && this.form.valid) {
      this.RestaurantAdded.emit(this.restaurant);
      this.restaurant = {
        id: 0,
        nom: "",
        adresse: "",
        evaluations: []
      }
    }
  }
}
