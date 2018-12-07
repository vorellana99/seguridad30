import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposRecursoRoutingModule } from './tipos-recurso-routing.module';
import { TiposRecursoComponent } from './tipos-recurso.component';
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
        TiposRecursoRoutingModule, 
        PageHeaderModule,
        TableModule,
        HttpClientModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        DialogModule,
        ToastModule
    ],
    declarations: [TiposRecursoComponent],
    bootstrap: [TiposRecursoComponent]
})
export class TiposRecursoModule { }
