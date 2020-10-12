import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// constants
import { FeatureConstant } from '../constants/features.constants';
import { OrderDataConst } from '../constants/orderData.constants';

@Component({
  selector: 'app-orders-ready',
  templateUrl: './orders-ready.component.html',
  styleUrls: ['./orders-ready.component.scss'],
})
export class OrdersReadyComponent implements OnInit {
  ordersData = OrderDataConst;
  filteredData: any;
  ordersReadyConst = FeatureConstant;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // to filter the data which has status as ready
    this.filteredData = this.ordersData.filter(
      (data) => data.status === 'ready'
    );
  }

  // method called on click of details button, to navigate to detail page with id as param
  redirectToDetailPage(id) {
    this.router.navigate(['orders-details', id]);
  }
}
