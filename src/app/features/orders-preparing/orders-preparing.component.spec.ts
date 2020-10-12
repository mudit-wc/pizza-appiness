import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPreparingComponent } from './orders-preparing.component';

describe('OrdersPreparingComponent', () => {
  let component: OrdersPreparingComponent;
  let fixture: ComponentFixture<OrdersPreparingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPreparingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPreparingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
