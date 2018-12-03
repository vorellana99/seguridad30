import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Usuario } from '../../shared/models/usuario';
import { UsuarioService } from '../../shared/services/usuario.service';

export class PrimeClass implements Usuario{
  constructor(public codigo?, public name?, public description?){}
}
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [routerTransition()],
  providers:[UsuarioService]
})
export class UsuariosComponent implements OnInit {

  inpBuscar:string = "";
  newItem: boolean;
  item:Usuario = new PrimeClass();
  items: Usuario[];
  displayDialog: boolean;
  loading: boolean;
  constructor(private service: UsuarioService) {}

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
  
  add(item:Usuario){
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

  update(item:Usuario){
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
