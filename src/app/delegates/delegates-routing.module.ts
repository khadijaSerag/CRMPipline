import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelegatesComponent } from './delegates.component';

const routes: Routes = [
  { path: '', component: DelegatesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelegatesRoutingModule { }
