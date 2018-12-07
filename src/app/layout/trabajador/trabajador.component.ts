import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Trabajador } from '../../shared/models/trabajador';
import { Usuario } from '../../shared/models/usuario';
import { TrabajadorService } from '../../shared/services/trabajador.service';
import { UsuarioService } from '../../shared/services/usuario.service';
import { ConfirmationService } from 'primeng/api';
// import { EventEmitter } from 'events';

export class PrimeClass implements Trabajador{
  constructor(public codigo?, public name?, public description?){}
}

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.scss'],
  animations: [routerTransition()],
  providers: [TrabajadorService, UsuarioService, ConfirmationService]
})
export class TrabajadorComponent implements OnInit {

  @Output() eventCloseDialog = new EventEmitter<boolean>();
  inpBuscar: string = "";
  item: Trabajador = new PrimeClass();
  items: Trabajador[];
  loading: boolean;

  constructor(private service: TrabajadorService,private usuarioService: UsuarioService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.loadGrid();
  }

  confirm(item:Trabajador) {
    
    this.confirmationService.confirm({
        message: '¿Desea Agregar a <b>'+ item.nombre + ' ' + item.apePaterno + ' ' + item.apeMaterno +'</b> como usuario(a)?',
        acceptLabel:"Si",
        rejectLabel:"No",
        accept: () => {
          var usuario: Usuario = { userName:item.codigo, codigo:item.codigo, password:"asdfWER74!" }
          this.addUsuario(usuario);
          this.eventCloseDialog.emit(false);
        }
    });
  }

  loadGrid(){
      this.loading = true;
      this.get(this.inpBuscar);
  }

  get(busqueda:string){
    this.service.get(busqueda)
    .subscribe(
        items => {
            this.items = items;
            console.log('Ok.Component.Read.');
            this.loading = false;
        },(error=>{
            console.log('Error.Component.Read.')
        }));
  }

  onRowSelect(event) {
    // this.newItem = false;
    this.item = {...event.data};
    this.confirm(this.item);
    
  }

  addUsuario(item:Usuario){
    this.usuarioService.add(item)
    .subscribe(
        item => {
            this.loadGrid(); // recarga la grilla
            console.log('Ok.Component.Insert.')
        },(error=>{
            console.log('Error.Component.Insert.')
        }));
  }
  
}
