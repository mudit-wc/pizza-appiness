import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureConstant } from './constants/features.constants';

// constants
import { OrderDataConst } from './constants/orderData.constants';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  ordersData = OrderDataConst;
  featureConstants = FeatureConstant;

  constructor(private router: Router) {}

  // method to be called on click of details button
  redirectToDetailPage(id: number): void {
    this.router.navigate(['orders-details', id]); // to navigate  to details page with order id
  }

  // method to be called on click of change status button,
  // and switch the cases on basis of status and update the status
  updateStatus(id: number, status: string): void {
    switch (status) {
      case this.featureConstants.received: {
        this.ordersData.find((item) => item.id === id).status = this.featureConstants.preparing;
        break;
      }
      case this.featureConstants.preparing: {
        this.ordersData.find((item) => item.id === id).status = this.featureConstants.ready;
        break;
      }
      case this.featureConstants.ready: {
        this.ordersData.find((item) => item.id === id).status = this.featureConstants.delivering;
        break;
      }
      case this.featureConstants.delivering: {
        this.ordersData.find((item) => item.id === id).status = this.featureConstants.delivered;
        break;
      }
    }
  }
}
