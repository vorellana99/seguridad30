import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { PageHeaderModule } from './../../shared';

import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        CommonModule, 
        UsuariosRoutingModule, 
        PageHeaderModule,
        TableModule,
        HttpClientModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        DialogModule
    ],
    declarations: [UsuariosComponent],
    bootstrap: [UsuariosComponent]
})
export class UsuariosModule { }
