import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionesPermisoComponent } from './acciones-permiso.component';

const routes: Routes = [
    {
        path: '', component: AccionesPermisoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccionesPermisoRoutingModule { }
