import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Permiso } from '../../shared/models/permiso';
import { Recurso } from '../../shared/models/recurso';
import { AccionPermiso } from '../../shared/models/accion-permiso';
import { DetallePermiso  } from '../../shared/models/detalle-permiso';

import { PermisoService } from '../../shared/services/permiso.service';
import { RecursoService } from '../../shared/services/recurso.service';
import { AccionPermisoService } from '../../shared/services/accion-permiso.service';
import { DetallePermisoService } from '../../shared/services/detalle-permiso';

import { MessageService } from 'primeng/api';

export class PrimeClass implements Permiso{
  constructor(public id?, public roleId?, public resourceId?, public resource?){}
}
export class RecursoPrimeClass implements Recurso{
    constructor(public id?, public name?, public description?){}
}
export class DetallePermisoPrimeClass implements AccionPermiso{
    constructor(public id?, public description?, public permissionId?, public permissionActionId?){}
}

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss'],
  animations: [routerTransition()],
  providers:[PermisoService, RecursoService, AccionPermisoService,DetallePermisoService, MessageService]
})
export class PermisosComponent implements OnInit {

  inpBuscar:string = "";
  inpBuscarRecursos:string = "";
  newItem: boolean;
  item: Permiso = new PrimeClass();
  items: Permiso[];
  recurso: Recurso = new RecursoPrimeClass();
  recursos: Recurso[];
  accionesPermiso : AccionPermiso[];
  displayDialog: boolean;
  displayDialogAccion: boolean;
  loading: boolean;
  loadingRecursos: boolean;
  roleId:string = "";
  public selAccionPermiso;

  constructor(  private service:PermisoService, private recursoService:RecursoService, 
                private accionPermisoService:AccionPermisoService, private detallePermisoService: DetallePermisoService, 
                private messageService:MessageService) {}
  
  ngOnInit() {
      // this.loadGrid();    
      this.getAccionesPermiso('');
  }

  loadGrid(busqueda:string){
      this.loading = true;
      this.get(this.roleId);
  }

  loadGridRecursos(){
    this.loadingRecursos = true;
    this.getRecursos(this.inpBuscarRecursos);
}

  showDialogToAdd() {
    //   this.newItem = true;
    //   this.item = new PrimeClass();
      this.loadGridRecursos();
      this.displayDialog = true;
  }

  onRowSelect(event) {
    //   this.newItem = false;
      this.recurso = {...event.data};
    //this.displayDialog = true;
      this.displayDialogAccion = true;
      console.log("onRowSelect");
      console.log(this.item);
      // this.save(this.item);
  }

  deleteSelectedRecurso(recurso:Recurso){
    this.messageService.clear();
    this.messageService.add({key: 'deleteToast', severity:'warn', summary: 'Advertencia', detail: 'Permiso eliminado.'});
    // console.log("Eliminando...");
  }

  save() {
      // tambien se puede eliminar...
      console.log('save permiso');
      this.item.roleId = this.roleId;
      this.item.resourceId = this.recurso.id;
      this.add(this.item);
  }

  getRecursos(buscar:string){
    this.recursoService.get('',buscar)
    .subscribe(
        items => {
            this.recursos = items;
            console.log('Ok.Component.Read.unoooo');
            console.log(items);
            this.loadingRecursos = false;
        },(error=>{
            console.log('Error.Component.Read.')
        }));
  }

  getAccionesPermiso(buscar:string){
    this.accionPermisoService.get('',buscar)
    .subscribe(
        items => {
            this.accionesPermiso = items;
            console.log('Ok.Component.Read.getAccionesPermiso');
            console.log(items);
            this.loadingRecursos = false;
        },(error=>{
            console.log('Error.Component.Read.')
        }));
  }

  get(roleId:string){
      this.service.get(roleId)
      .subscribe(
          items => {
              this.items = items;
              console.log('Ok.Component.Read.tresss');
              console.log(items);
              this.loading = false;
          },(error=>{
              console.log('Error.Component.Read.')
          }));
  }
  
  add(permiso:Permiso){
      this.service.add(permiso)
      .subscribe(   
          item => {
              console.log('Ok.Component.Insert. ADD PERMISO');
              console.log(permiso);
              var detallePermiso: DetallePermiso = new DetallePermisoPrimeClass();
              detallePermiso.permissionId = item.id;
              detallePermiso.description = '-';
              detallePermiso.permissionActionId = this.selAccionPermiso;
              // this.item = null; no destruir la lista, debe persistir.
              this.displayDialog = false;
              this.addDetallePermiso(detallePermiso); // grabando el detallePermiso
          },(error=>{
              console.log('Error.Component.Insert.')
          }));
  }

  addDetallePermiso(item:DetallePermiso){
    this.detallePermisoService.add(item)
    .subscribe(
        item => {
            this.loadGrid(this.roleId); // recarga la grilla
            console.log('Ok.Component.Insert.')
            this.displayDialogAccion = false;
        },(error=>{
            console.log('Error.Component.Insert.')
        }));
  }   

  // falta adaptar
  // update(item:Permiso){
  //     this.service.update(item)
  //     .subscribe(
  //         item => {
  //             this.loadGrid(); // recarga la grilla
  //             console.log('Ok.Component.Update')
  //             this.item = null;
  //             this.displayDialog = false;
  //         },(error=>{
  //             console.log('Error.Component.Update.')
  //         }));
  // }

  delete(){}

}
