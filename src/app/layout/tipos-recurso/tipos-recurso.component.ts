import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { TipoRecurso } from '../../shared/models/tipo-recurso';
import { TipoRecursoService } from '../../shared/services/tipo-recurso.service';
import {MessageService} from 'primeng/api';

export class PrimeClass implements TipoRecurso{
  constructor(public id?, public name?, public description?){}
}
@Component({
  selector: 'app-tipos-recurso',
  templateUrl: './tipos-recurso.component.html',
  styleUrls: ['./tipos-recurso.component.scss'],
  animations: [routerTransition()],
  providers:[TipoRecursoService,MessageService]
})
export class TiposRecursoComponent implements OnInit {
  inpBuscar:string = "";
  newItem: boolean;
  item:TipoRecurso = new PrimeClass();
  items: TipoRecurso[];
  displayDialog: boolean;
  loading: boolean;
  constructor(private service:TipoRecursoService, private messageService:MessageService) {}

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

  validation(){
    if(this.item.id == null || this.item.name == null || this.item.description == null)
        return false;
    if(this.item.id.trim() == '' || this.item.name.trim() == '' || this.item.description.trim() == '')
        return false;
    return true;
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
  
  add(item:TipoRecurso){
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

  update(item:TipoRecurso){
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

  delete(){}
  
}
