import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Entrada1Component } from './entrada1/entrada1.component';
import { Entrada2Component } from './entrada2/entrada2.component';
import { Entrada3Component } from './entrada3/entrada3.component';

const routes: Routes = [
  {path: 'entrada1', component: Entrada1Component},
  {path: 'entrada2', component: Entrada2Component},
  {path: 'entrada3', component: Entrada3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
