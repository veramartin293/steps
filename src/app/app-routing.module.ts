import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuInformacionComponent } from './components/tu-informacion/tu-informacion.component';

const routes: Routes = [
  {
    path: 'tu-informacion',
    component: TuInformacionComponent
  },
  {
    path: '**',
    redirectTo: '/tu-informacion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
