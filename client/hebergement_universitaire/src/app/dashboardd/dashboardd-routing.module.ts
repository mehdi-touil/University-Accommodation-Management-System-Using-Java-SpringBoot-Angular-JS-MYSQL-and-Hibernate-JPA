import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { ListeFoyerComponent } from './liste-foyer/liste-foyer.component';
import { UpdatFoyerComponent } from './updat-foyer/updat-foyer.component';
import { DetailsFoyerComponent } from './details-foyer/details-foyer.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add_foyer', component: AddFoyerComponent },
  {
    path: 'liste_foyer',
    component: ListeFoyerComponent,
  },
  { path: 'edit/foyer/:idFoyer', component: UpdatFoyerComponent },
  { path: 'details/foyer/:idFoyer', component: DetailsFoyerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboarddRoutingModule {}
