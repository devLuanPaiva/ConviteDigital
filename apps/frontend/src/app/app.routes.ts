import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
    path: 'event',
    loadChildren: () =>
      import('./pages/event/event.module').then((m) => m.EventModule),
  },
  {
    path: 'event/success',
    loadChildren: () =>
      import('./pages/success/success.module').then((m) => m.SuccessModule),
  },
  {
    path: 'event/admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
