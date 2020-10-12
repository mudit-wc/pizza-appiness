import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ButtonComponent } from './button/button.component';

// modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NavBarComponent,
    PageHeaderComponent,
    ListItemsComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [
    NavBarComponent,
    PageHeaderComponent,
    ListItemsComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
