import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./sales/sales.module').then((m) => m.SalesModule),
  },

  {
    path: 'exhibitors',
    loadChildren: () =>
      import('./exhibitors/exhibitors.module').then((m) => m.ExhibitorsModule),
  },

  {
    path: 'sales',
    loadChildren: () =>
      import('./sales/sales.module').then((m) => m.SalesModule),
  },

  {
    path: 'program',
    loadChildren: () =>
      import('./program/program.module').then((m) => m.ProgramModule),
  },

  {
    path: 'delegates',
    loadChildren: () =>
      import('./delegates/delegates.module').then((m) => m.DelegatesModule),
  },

  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
