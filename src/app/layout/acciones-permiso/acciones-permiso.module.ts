import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccionesPermisoRoutingModule } from './acciones-permiso-routing.module';
import { AccionesPermisoComponent } from './acciones-permiso.component';
import { PageHeaderModule } from './../../shared';
@NgModule({
    imports: [CommonModule, AccionesPermisoRoutingModule, PageHeaderModule],
    declarations: [AccionesPermisoComponent]
})
export class AccionesPermisoModule { }
