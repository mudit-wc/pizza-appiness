import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//constants
import { FeatureConstant } from '../constants/features.constants';
import { OrderDataConst } from '../constants/orderData.constants';

@Component({
  selector: 'app-orders-preparing',
  templateUrl: './orders-preparing.component.html',
  styleUrls: ['./orders-preparing.component.scss'],
})
export class OrdersPreparingComponent implements OnInit {
  ordersData = OrderDataConst;
  filteredData: any;
  ordersPreparingConst = FeatureConstant;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // to filter the data which has status as preparing
    this.filteredData = this.ordersData.filter(
      (data) => data.status === 'preparing'
    );
  }

  // method called on click of details button, to navigate to detail page with id as param
  redirectToDetailPage(id: number) {
    this.router.navigate(['orders-details', id]);
  }
}
