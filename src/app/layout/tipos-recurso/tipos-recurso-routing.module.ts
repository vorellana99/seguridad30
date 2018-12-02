import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiposRecursoComponent } from './tipos-recurso.component';

const routes: Routes = [
    {
        path: '', component: TiposRecursoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposRecursoRoutingModule { }
