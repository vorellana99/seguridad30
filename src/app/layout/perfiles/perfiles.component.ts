import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Perfil } from '../../shared/models/perfil';
import { PerfilService } from '../../shared/services/perfil.service';
import { PermisosComponent } from '../permisos/permisos.component';
import { MessageService } from 'primeng/api';
export class PrimeClass implements Perfil {
    constructor(public id?, public name?, public description?) {}
}
@Component({
    selector: 'app-perfiles',
    templateUrl: './perfiles.component.html',
    styleUrls: ['./perfiles.component.scss'],
    animations: [routerTransition()],
      providers: [PerfilService, MessageService]
})
export class PerfilesComponent implements OnInit {
    inpBuscar = '';
    newItem: boolean;
    item: Perfil = new PrimeClass();
    items: Perfil[];
    displayDialog: boolean;
    displayDialogPerfil: boolean;
    loading: boolean;
    @ViewChild(PermisosComponent) private permisosComponent: PermisosComponent;
    headerDialog = '';

    constructor(private service: PerfilService, private messageService: MessageService) {}

    ngAfterViewInit() {
        // this.permisosComponent.loadGrid();
        // this.permisosComponent.loading = true;
    }

    ngOnInit() {
        this.loadGrid();
    }

    selectPerfilWithButton(selectedItem: Perfil) {
        console.log(selectedItem);
        this.permisosComponent.roleId = selectedItem.id;
        this.permisosComponent.loadGrid('');
        this.headerDialog = 'Permisos del perfil: ' + selectedItem.name;
        this.displayDialogPerfil = true;
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
        this.newItem = false;
        this.item = {...event.data};
        this.displayDialog = true;
    }

    validation() {
        if (this.item.id == null || this.item.name == null || this.item.description == null) {
            return false;
        }
        if (this.item.id.trim() === '' || this.item.name.trim() === '' || this.item.description.trim() === '') {
            return false;
        }
        return true;
    }

    save() {
        if (this.validation()) {
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
