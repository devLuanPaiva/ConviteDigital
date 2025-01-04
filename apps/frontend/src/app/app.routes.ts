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
    path: 'event/admin/:id/:password',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'event/invitation/:alias',
    loadChildren: () =>
      import('./pages/invitation/invitation.module').then(
        (m) => m.InvitationModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
