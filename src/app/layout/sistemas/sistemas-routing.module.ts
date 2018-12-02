import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemasComponent } from './sistemas.component';

const routes: Routes = [
  {
      path: '',
      component: SistemasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemasRoutingModule { }
