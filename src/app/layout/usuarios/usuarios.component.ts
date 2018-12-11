import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Usuario } from '../../shared/models/usuario';
import { UsuarioService } from '../../shared/services/usuario.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

export class PrimeClass implements Usuario {
  constructor(public id?, public codigo?, public name?, public description?) {}
}
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [routerTransition()],
  providers: [UsuarioService, ConfirmationService, MessageService]
})
export class UsuariosComponent implements OnInit {

    inpBuscar = '';
    newItem: boolean;
    item: Usuario = new PrimeClass();
    items: Usuario[];
    displayDialog: boolean;
    loading: boolean;

    constructor(private service: UsuarioService, private confirmationService: ConfirmationService,
                private messageService: MessageService) {}

    ngOnInit() {
        this.loadGrid();
    }

    closeDialogHandler(mival: boolean) {
        this.displayDialog = mival;
        this.loadGrid();
    }

    deleteSelectedItem(item: Usuario) {
        this.confirmDelete(item);
    }

    confirmDelete(item: Usuario) {
        this.confirmationService.confirm({
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            message: '¿Desea quitar como usuario a <b>' +
                item.nombre + ' ' + item.apePaterno + ' ' + item.apeMaterno + '</b> como usuario(a)?',
            acceptLabel: 'Si',
            rejectLabel: 'No',
            accept: () => {
                this.delete(item.id);
            //   var usuario: Usuario = { userName:item.codigo, codigo:item.codigo, password:"asdfWER74!" }
            //   this.addUsuario(usuario);
            //   this.eventCloseDialog.emit(false);
            }
        });
    }

    loadGrid() {
        this.loading = true;
        this.get('', this.inpBuscar);
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

    save() {
        if (this.newItem) {
            this.add(this.item);
        } else {
            this.update(this.item);
        }
    }

    get(id: string, busqueda: string) {
        this.service.get(id, busqueda)
        .subscribe(
            items => {
                this.items = items;
                console.log('Ok.Component.Read.');
                this.loading = false;
            }, (error => {
                console.log('Error.Component.Read.');
            }));
    }

    add(item: Usuario) {
        this.service.add(item)
        .subscribe(
            item => {
                this.loadGrid(); // recarga la grilla
                console.log('Ok.Component.Insert.');
                this.item = null;
                this.displayDialog = false;
            }, (error => {
                console.log('Error.Component.Insert.');
            }));
    }

    update(item: Usuario) {
        this.service.update(item)
        .subscribe(
            item => {
                this.loadGrid(); // recarga la grilla
                console.log('Ok.Component.Update');
                this.item = null;
                this.displayDialog = false;
            }, (error => {
                console.log('Error.Component.Update.');
            }));
    }

    delete(id: string) {
        this.service.delete(id)
        .subscribe(
            item => {
                console.log('Ok.Component.Delete');
                this.item = null;
                this.displayDialog = false;
                this.messageService.add({key: 'tst-info', severity: 'warn', summary: 'Advertencia', detail: 'Permiso eliminado.'});
                this.loadGrid();
            }, (error => {
                console.log('Error.Component.Delete');
            }));
    }

}
