import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

// import { PerfilesComponent } from './perfiles/perfiles.component';
// import { RecursosComponent } from './recursos/recursos.component';
// import { AccionesPermisoComponent } from './acciones-permiso/acciones-permiso.component';
// import { TiposRecursoComponent } from './tipos-recurso/tipos-recurso.component';
// import { UsuariosComponent } from './usuarios/usuarios.component';
// import { SistemasComponent } from './sistemas/sistemas/sistemas.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent
        // PerfilesComponent, RecursosComponent, AccionesPermisoComponent, TiposRecursoComponent, UsuariosComponent, SistemasComponent
    ]
})
export class LayoutModule {}
