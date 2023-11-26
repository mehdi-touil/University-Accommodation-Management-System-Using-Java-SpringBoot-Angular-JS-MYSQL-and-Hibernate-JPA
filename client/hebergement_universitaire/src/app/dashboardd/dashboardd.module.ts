import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboarddRoutingModule } from './dashboardd-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListeFoyerComponent } from './liste-foyer/liste-foyer.component';
import { UpdatFoyerComponent } from './updat-foyer/updat-foyer.component';
import { DetailsFoyerComponent } from './details-foyer/details-foyer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent,
    HeaderComponent,
    AddFoyerComponent,
    ListeFoyerComponent,
    UpdatFoyerComponent,
    DetailsFoyerComponent,
  ],
  imports: [CommonModule, DashboarddRoutingModule, ReactiveFormsModule],
})
export class DashboarddModule {}
