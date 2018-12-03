import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Recurso } from '../../shared/models/recurso';
import { RecursoService } from '../../shared/services/recurso.service';

export class PrimeClass implements Recurso{
  constructor(public id?, public name?, public description?){}
}
@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss'],
  animations: [routerTransition()],
  providers:[RecursoService]
})
export class RecursosComponent implements OnInit {
  inpBuscar:string = "";
  newItem: boolean;
  item:Recurso = new PrimeClass();
  items: Recurso[];
  displayDialog: boolean;
  loading: boolean;
  constructor(private service:RecursoService) {}

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
  
  add(item:Recurso){
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

  update(item:Recurso){
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