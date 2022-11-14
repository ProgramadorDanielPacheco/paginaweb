import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';
import { Componente6Component } from './componente6/componente6.component';



const routes: Routes = [
  {path: '', component: Componente1Component},
  {path: 'web1', component: Componente1Component},
  {path: 'web2', component: Componente2Component},
  {path: 'web3', component: Componente3Component},
  {path: 'web4', component: Componente4Component},
  {path: 'web5', component: Componente5Component},
  {path: 'web6', component: Componente6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
