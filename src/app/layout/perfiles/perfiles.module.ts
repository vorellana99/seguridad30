import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { PerfilesComponent } from './perfiles.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, PerfilesRoutingModule, PageHeaderModule],
    declarations: [PerfilesComponent]
})
export class PerfilesModule { }
