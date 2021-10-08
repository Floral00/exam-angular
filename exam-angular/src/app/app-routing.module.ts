import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantSmartComponent} from "./pages/restaurant-smart/restaurant-smart.component";
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: "", component: RestaurantSmartComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
