import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { DealsComponent } from './deals/deals.component';
import { ActivitiesComponent } from './activities/activities.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    SalesComponent,
    DealsComponent,
    ActivitiesComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    DragDropModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class SalesModule { }
