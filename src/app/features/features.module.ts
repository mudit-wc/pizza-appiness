import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component
import { FeaturesComponent } from './features.component';
import { OrdersReceivedComponent } from './orders-received/orders-received.component';
import { OrdersPreparingComponent } from './orders-preparing/orders-preparing.component';
import { OrdersReadyComponent } from './orders-ready/orders-ready.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

// modules
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FeaturesComponent,
    OrdersReceivedComponent,
    OrdersPreparingComponent,
    OrdersReadyComponent,
    OrderDetailsComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, SharedModule],
})
export class FeaturesModule {}
