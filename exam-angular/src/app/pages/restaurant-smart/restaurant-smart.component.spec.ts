import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSmartComponent } from './restaurant-smart.component';

describe('RestaurantSmartComponent', () => {
  let component: RestaurantSmartComponent;
  let fixture: ComponentFixture<RestaurantSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantSmartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
