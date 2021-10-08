import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { RestaurantEvaluationDirective } from './shared/directives/restaurant-evaluation.directive';
import {AppRoutingModule} from "./app-routing.module";
import {RestaurantService} from "./services/restaurant.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RestaurantSmartComponent } from './pages/restaurant-smart/restaurant-smart.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    RestaurantFormComponent,
    RestaurantDetailComponent,
    RestaurantEvaluationDirective,
    RestaurantSmartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
