import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersPreparingComponent } from './orders-preparing/orders-preparing.component';
import { OrdersReadyComponent } from './orders-ready/orders-ready.component';
import { OrdersReceivedComponent } from './orders-received/orders-received.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent
  },
  {
    path: 'orders-received',
    component: OrdersReceivedComponent
  },
  {
    path: 'orders-preparing',
    component: OrdersPreparingComponent
  },
  {
    path: 'orders-ready',
    component: OrdersReadyComponent
  },
  {
    path: 'orders-details/:id',
    component: OrderDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
