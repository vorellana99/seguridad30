import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursosComponent } from './recursos.component';

const routes: Routes = [
    {
        path: '', component: RecursosComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosRoutingModule { }
