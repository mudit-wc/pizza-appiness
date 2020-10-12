import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureConstant } from '../constants/features.constants';
import { OrderDataConst } from '../constants/orderData.constants';

@Component({
  selector: 'app-orders-received',
  templateUrl: './orders-received.component.html',
  styleUrls: ['./orders-received.component.scss'],
})
export class OrdersReceivedComponent implements OnInit {
  ordersData = OrderDataConst;
  ordersReceivedConst = FeatureConstant;
  filteredData: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // to filter the data which has status as recived
    this.filteredData = this.ordersData.filter(
      (data) => data.status === 'received'
    );
  }

  // method called on click of details button, to navigate to detail page with id as param
  redirectToDetailPage(id: number) {
    this.router.navigate(['orders-details', id]);
  }
}
