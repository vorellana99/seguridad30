import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { PerfilesComponent } from './perfiles.component';
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
        PerfilesRoutingModule, 
        PageHeaderModule,
        TableModule,
        HttpClientModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        DialogModule
    ],
    declarations: [PerfilesComponent],
    bootstrap: [PerfilesComponent]
})
export class PerfilesModule { }
