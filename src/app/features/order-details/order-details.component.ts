import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//constants
import { OrderDetailsDataConst } from '../constants/orderDetailsData.constants';
import { FeatureConstant } from '../constants/features.constants';

//models
import { OrderDetail } from '../_models/orderDetail.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  orderId: number;
  orderDetailConst = FeatureConstant;
  ordersDetailData: OrderDetail[] = OrderDetailsDataConst;
  filterData: OrderDetail[];
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // to capture the route params id from url ,
    // param id to be passed in variable, which is then available to use in the component
    this.route.params.subscribe((params) => {
      this.orderId = params.id;
    });
    this.filterItem();
  }

  // to filter the data for that particular id present in parmas
  // to captured filtered data in variable for the template view
  filterItem(): void {
    this.filterData = this.ordersDetailData.filter(
      (data) => data.id === Number(this.orderId)
    );
  }

  // method called on click of back, route to location back page
  onBackClick() {
    this.location.back();
  }
}
