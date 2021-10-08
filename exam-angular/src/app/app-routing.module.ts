import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantSmartComponent} from "./pages/restaurant-smart/restaurant-smart.component";
import {RouterModule, Routes} from '@angular/router';
import {RestaurantDetailComponent} from "./pages/restaurant-detail/restaurant-detail.component";

const routes: Routes = [
  {path: "", component: RestaurantSmartComponent},
  {path: "detail", component: RestaurantDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
