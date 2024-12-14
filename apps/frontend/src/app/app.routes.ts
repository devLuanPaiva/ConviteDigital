import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './pages/landing/landing.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { 
        path: '', 
        component: LandingComponent, 
        pathMatch: 'full' 
      },
      { 
        path: '', 
        component: AppComponent,
        children: [
          {
            path: 'event',
            loadChildren: () => 
              import('./pages/event/event.module').then(m => m.EventModule),
          },
        ],
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
