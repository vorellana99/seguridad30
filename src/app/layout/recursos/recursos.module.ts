import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosRoutingModule } from './recursos-routing.module';
import { RecursosComponent } from './recursos.component';
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
        RecursosRoutingModule, 
        PageHeaderModule,
        TableModule,
        HttpClientModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        DialogModule],
    declarations: [RecursosComponent],
    bootstrap: [RecursosComponent]
})
export class RecursosModule { }
