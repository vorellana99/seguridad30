import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemasComponent } from './sistemas.component';
import { PageHeaderModule } from '../../shared';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    SistemasRoutingModule,
    PageHeaderModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule
    
  ],
  declarations: [SistemasComponent],
  bootstrap: [SistemasComponent]
})
export class SistemasModule { }
