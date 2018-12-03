import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { AccionPermiso } from '../../shared/models/accion-permiso';
import { AccionPermisoService } from '../../shared/services/accion-permiso.service';

export class PrimeClass implements AccionPermiso{
  constructor(public id?, public name?, public description?){}
}
@Component({
  selector: 'app-acciones-permiso',
  templateUrl: './acciones-permiso.component.html',
  styleUrls: ['./acciones-permiso.component.scss'],
  animations: [routerTransition()],
  providers:[AccionPermisoService]
})
export class AccionesPermisoComponent implements OnInit {
  inpBuscar:string = "";
  newItem: boolean;
  item:AccionPermiso = new PrimeClass();
  items: AccionPermiso[];
  displayDialog: boolean;
  loading: boolean;
  constructor(private service:AccionPermisoService) {}

  ngOnInit() {
      this.loadGrid();    
  }

  loadGrid(){
      this.loading = true;
      this.get('',this.inpBuscar);
  }

  showDialogToAdd() {
      this.newItem = true;
      this.item = new PrimeClass();
      this.displayDialog = true;
  }

  onRowSelect(event) {
      this.newItem = false;
      this.item = {...event.data};
      this.displayDialog = true;
  }

  save() {
      if (this.newItem) 
          this.add(this.item);
      else
          this.update(this.item);
  }

  get(id:string,busqueda:string){
      this.service.get(id,this.inpBuscar)
      .subscribe(
          items => {
              this.items = items;
              console.log('Ok.Component.Read.');
              this.loading = false;
          },(error=>{
              console.log('Error.Component.Read.')
          }));
  }
  
  add(item:AccionPermiso){
      this.service.add(item)
      .subscribe(
          item => {
              this.loadGrid(); // recarga la grilla
              console.log('Ok.Component.Insert.')
              this.item = null;
              this.displayDialog = false;
          },(error=>{
              console.log('Error.Component.Insert.')
          }));
  }

  update(item:AccionPermiso){
      this.service.update(item)
      .subscribe(
          item => {
              this.loadGrid(); // recarga la grilla
              console.log('Ok.Component.Update')
              this.item = null;
              this.displayDialog = false;
          },(error=>{
              console.log('Error.Component.Update.')
          }));
  }
}