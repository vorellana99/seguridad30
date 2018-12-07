import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccionesPermisoRoutingModule } from './acciones-permiso-routing.module';
import { AccionesPermisoComponent } from './acciones-permiso.component';
import { PageHeaderModule } from './../../shared';

import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast'

@NgModule({
    imports: [
        CommonModule, 
        AccionesPermisoRoutingModule, 
        PageHeaderModule,    
        TableModule,
        HttpClientModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        DialogModule,
        ToastModule
    ],
    declarations: [AccionesPermisoComponent],
    bootstrap: [AccionesPermisoComponent]
})
export class AccionesPermisoModule { }
