import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnoComponent } from './components/uno/uno.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "home"
  },
  {path: 'home', component: UnoComponent},
  {path: 'character', component: UnoComponent},
  {path: 'movie', component: UnoComponent},
  {path: 'about', component: UnoComponent}
  // {
  //   path: '',       
  //   component: NotFoundComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',   
  //   redirectTo: '404',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
