import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermisosComponent } from './permisos.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule
  ],
  declarations: [PermisosComponent],
  bootstrap: [PermisosComponent]
})
export class PermisosModule { }
