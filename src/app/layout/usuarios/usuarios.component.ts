import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Usuario } from '../../shared/models/usuario';
import { UsuarioService } from '../../shared/services/usuario.service';
import { ConfirmationService } from 'primeng/api';

export class PrimeClass implements Usuario{
  constructor(public codigo?, public name?, public description?){}
}
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [routerTransition()],
  providers:[UsuarioService,ConfirmationService]
})
export class UsuariosComponent implements OnInit {

  inpBuscar:string = "";
  newItem: boolean;
  item:Usuario = new PrimeClass();
  items: Usuario[];
  displayDialog: boolean;
  loading: boolean;

  //constructor(private service: UsuarioService) {}
  constructor(private service: UsuarioService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
      this.loadGrid();
  }

  closeDialogHandler(mival: boolean){
    this.displayDialog = mival;
    this.loadGrid();
  }

  confirm() {
    this.confirmationService.confirm({
    message: 'Are you sure that you want to perform this action?',
    accept: () => {
        //Actual logic to perform a confirmation
    }});
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
    //   this.newItem = false;
    //   this.item = {...event.data};
    //   this.displayDialog = true;
  }

//   save() {
//       if (this.newItem) 
//           this.add(this.item);
//       else
//           this.update(this.item);
//   }

  save() {
      if (this.newItem) 
          this.add(this.item);
      else
          this.update(this.item);
  }

  get(id:string,busqueda:string){
      this.service.get(id,busqueda)
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

  delete(){}

}
