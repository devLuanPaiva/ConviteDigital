import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
    path: 'evento',
    loadChildren: () =>
      import('./pages/event/event.module').then((m) => m.EventModule),
  },
  {
    path: 'evento/sucesso',
    loadChildren: () =>
      import('./pages/success/success.module').then((m) => m.SuccessModule),
  },
  {
    path: 'evento/admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'evento/convite/:alias',
    loadChildren: () =>
      import('./pages/invitation/invitation.module').then(
        (m) => m.InvitationModule,
      ),
  },
  {
    path: 'evento/agradecimento',
    loadChildren: () =>
      import('./pages/thank-page/thank-page.module').then(
        (m) => m.ThankPageModule,
      ),
  },
  {
    path: 'eventos',
    loadChildren: () =>
      import('./pages/events/events.module').then((m) => m.EventsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
