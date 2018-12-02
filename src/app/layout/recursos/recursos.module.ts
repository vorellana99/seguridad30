import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosRoutingModule } from './recursos-routing.module';
import { RecursosComponent } from './recursos.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, RecursosRoutingModule, PageHeaderModule],
    declarations: [RecursosComponent]
})
export class RecursosModule { }
