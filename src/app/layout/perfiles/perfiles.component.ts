import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Perfil } from '../../shared/models/perfil';
import { Usuario } from '../../shared/models/usuario';
import { PerfilService } from '../../shared/services/perfil.service';
import { SistemaService } from '../../shared/services/sistema.service';
import { UsuarioService } from '../../shared/services/usuario.service';
import { ConfirmationService } from 'primeng/api';
import { PermisosComponent } from '../permisos/permisos.component';
import { MessageService } from 'primeng/api';
import { Sistema } from 'src/app/shared/models/sistema';
export class PrimeClass implements Perfil {
    constructor(public id?, public name?, public customName?, public systemAppId?, public description?) {}
}
@Component({
    selector: 'app-perfiles',
    templateUrl: './perfiles.component.html',
    styleUrls: ['./perfiles.component.scss'],
    animations: [routerTransition()],
      providers: [  PerfilService, SistemaService, UsuarioService,
                    MessageService, ConfirmationService]
})
export class PerfilesComponent implements OnInit {
    inpBuscar = '';
    newItem: boolean;
    item: Perfil = new PrimeClass();
    items: Perfil[];
    usuarios: Usuario[];
    usuariosGen: Usuario[];
    sistemas: Sistema[];
    displayDialog: boolean;
    displayDialogPerfil: boolean;
    displayDialogUsuario: boolean;
    displayDialogUsuarioGen: boolean;
    loading: boolean;
    loadingUsuarios: boolean;
    loadingUsuariosGen: boolean;
    @ViewChild(PermisosComponent) private permisosComponent: PermisosComponent;
    headerDialogPermisos = '';
    headerDialogUsuarios = 'Usuarios';
    headerDialogUsuariosGen = 'Todos los usuarios';

    constructor(private service: PerfilService, private sistemaService: SistemaService,
                private usuarioService: UsuarioService, private messageService: MessageService,
                private confirmationService: ConfirmationService) {}

    ngAfterViewInit() {
        // this.permisosComponent.loadGrid();
        // this.permisosComponent.loading = true;
    }

    ngOnInit() {
        this.loadGrid();
        this.getSistemas(0, '');
    }

    selectPerfilPermisos(selectedItem: Perfil) {
        console.log(selectedItem);
        this.permisosComponent.roleId = selectedItem.id;
        this.permisosComponent.loadGrid('');
        this.headerDialogPermisos = 'Permisos del perfil: ' + selectedItem.name;
        this.displayDialogPerfil = true;
    }

    selectPerfilUsuarios(selectedItem: Perfil) {
        console.log(selectedItem);
        this.loadGridUsuarios(selectedItem.id);
        this.displayDialogUsuario = true;
    }

    loadGrid() {
        this.loading = true;
        this.get('', this.inpBuscar);
    }

    loadGridUsuarios(roleId: string) {
        this.loadingUsuarios = true;
        this.getUsers(roleId);
    }

    loadGridUsuariosGen(id: string, busqueda: string) {
        this.loadingUsuariosGen = true;
        this.getUsersGen(id, busqueda);
    }

    showDialogToAdd() {
        this.newItem = true;
        this.item = new PrimeClass();
        this.displayDialog = true;
    }

    showDialogUsuarioGen() {
        this.loadGridUsuariosGen('', '');
        this.displayDialogUsuarioGen = true;
    }

    onRowSelect(event) {
        this.newItem = false;
        this.item = {...event.data};
        this.displayDialog = true;
    }

    onRowSelectUsuarioGen(event) {
        console.log(event);
        this.confirmationService.confirm({
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            message: '¿Desea agregar al usuario a <b>' +
                 event.data.nombre + ' ' + event.data.apePaterno + ' ' + event.data.apeMaterno + '</b> ?',
            acceptLabel: 'Si',
            rejectLabel: 'No',
            accept: () => {
                // this.delete(item.id);
            //   var usuario: Usuario = { userName:item.codigo, codigo:item.codigo, password:"asdfWER74!" }
            //   this.addUsuario(usuario);
            //   this.eventCloseDialog.emit(false);
            }
        });

    }

    validation() {
        if (this.item.customName == null || this.item.systemAppId == null || this.item.description == null) {
            return false;
        }
        if (this.item.customName.trim() === '' || this.item.systemAppId.trim() === '' || this.item.description.trim() === '') {
            return false;
        }
        return true;
    }

    getSistemas(id: number, busqueda: string) {
        this.sistemaService.get(id, this.inpBuscar)
        .subscribe(
            items => {
                this.sistemas = items;
                console.log('Ok.Component.Read.');
                this.loading = false;
            }, (error => {
                console.log('Error.Component.Read.');
            }));
    }

    getUsers(roleId: string) {
        this.service.getUsers(roleId)
        .subscribe(
            items => {
                this.usuarios = items;
                console.log('Ok.Component.Read.');
                this.loadingUsuarios = false;
            }, (error => {
                console.log('Error.Component.Read.');
            }));
    }

    // ME QUEDE AQUIE EN PROBAR ESTO
    getUsersGen(id: string, busqueda: string) {
        this.usuarioService.get(id, busqueda)
        .subscribe(
            items => {
                this.usuariosGen = items;
                console.log('Ok.Component.Read.');
                this.loadingUsuarios = false;
            }, (error => {
                console.log('Error.Component.Read.');
            }));
    }

    save() {
        if (this.validation()) {
            this.item.name = this.item.customName + '-' + this.item.systemAppId;
            if (this.newItem) {
                this.add(this.item);
            } else {
                this.update(this.item);
            }
        } else {
          this.messageService.add({key: 'tst-info', severity: 'info', detail: 'Los campos con asterisco (*) son obligatorios.'});
        }
    }

    get(id: string, busqueda: string) {
        this.service.get(id, this.inpBuscar)
        .subscribe(
            items => {
                this.items = items;
                console.log('Ok.Component.Read.');
                this.loading = false;
            }, (error => {
                console.log('Error.Component.Read.');
            }));
    }

    add(item: Perfil) {
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

    update(item: Perfil) {
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

    delete() {}
}
