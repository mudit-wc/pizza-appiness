import { Component, Input } from '@angular/core';

//constants
import { AppConfigurationConstants } from 'src/app/_constants/appConfiguration.constants';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() pageHeader: string = AppConfigurationConstants.appPageHeader;
  @Input() pageSubHeader: string = AppConfigurationConstants.appPageSubHeader;
}
