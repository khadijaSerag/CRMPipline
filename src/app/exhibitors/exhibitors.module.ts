import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitorsRoutingModule } from './exhibitors-routing.module';
import { ExhibitorsComponent } from './exhibitors.component';


@NgModule({
  declarations: [
    ExhibitorsComponent
  ],
  imports: [
    CommonModule,
    ExhibitorsRoutingModule
  ]
})
export class ExhibitorsModule { }
