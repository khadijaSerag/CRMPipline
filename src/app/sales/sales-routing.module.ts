import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { DealsComponent } from './deals/deals.component';
import { SalesComponent } from './sales.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: '', component: DealsComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'statistics', component: StatisticsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
