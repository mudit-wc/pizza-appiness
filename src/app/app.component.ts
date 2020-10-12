import { Component } from '@angular/core';

// constants
import { AppConfigurationConstants } from './_constants/appConfiguration.constants';
import { LinkUrl } from './_constants/linkUrl.constants';

//models
import { LinkUrls } from './_models/linkUrl.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = AppConfigurationConstants.appHeaderTitle;
  data: LinkUrls[] = LinkUrl;
}
