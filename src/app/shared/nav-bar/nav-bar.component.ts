import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent{
  @Input() appTitle: string = ''; // title of the application to  be shown on left hand side
  @Input() data: any; // this data will be the links tag name and href to be shown in nav bar
}
