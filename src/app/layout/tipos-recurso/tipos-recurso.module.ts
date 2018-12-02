import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposRecursoRoutingModule } from './tipos-recurso-routing.module';
import { TiposRecursoComponent } from './tipos-recurso.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, TiposRecursoRoutingModule, PageHeaderModule],
    declarations: [TiposRecursoComponent]
})
export class TiposRecursoModule { }
