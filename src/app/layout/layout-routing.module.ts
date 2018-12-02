import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },

            // nuevos
            { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule' },
            { path: 'perfiles', loadChildren: './perfiles/perfiles.module#PerfilesModule' },
            { path: 'sistemas', loadChildren: './sistemas/sistemas.module#SistemasModule' },
            { path: 'recursos', loadChildren: './recursos/recursos.module#RecursosModule' },
            { path: 'tipos-recurso', loadChildren: './tipos-recurso/tipos-recurso.module#TiposRecursoModule' },
            { path: 'acciones-permiso', loadChildren: './acciones-permiso/acciones-permiso.module#AccionesPermisoModule' },

            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
