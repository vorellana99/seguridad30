import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Sistema } from '../../shared/models/sistema';
import { SistemaService } from '../../shared/services/sistema.service';
import {MessageService} from 'primeng/api';

export class PrimeClass implements Sistema {
    constructor(public id?, public name?, public description?) {}
}
@Component({
    selector: 'app-sistemas',
    templateUrl: './sistemas.component.html',
    styleUrls: ['./sistemas.component.scss'],
    animations: [routerTransition()],
    providers: [SistemaService, MessageService]
})
export class SistemasComponent implements OnInit {
    inpBuscar = '';
    newItem: boolean;
    item: Sistema = new PrimeClass();
    items: Sistema[];
    displayDialog: boolean;
    loading: boolean;

    constructor(private service: SistemaService, private messageService: MessageService) {}

    ngOnInit() {
        this.loadGrid();
    }

    loadGrid() {
        this.loading = true;
        this.get(0, this.inpBuscar);
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
        if (this.item.name == null || this.item.description == null) {
            return false;
        }
        if (this.item.name.trim() === '' || this.item.description.trim() === '') {
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

    get(id: number, busqueda: string) {
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

    add(item: Sistema) {
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

    update(item: Sistema) {
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

    // me quede aqui. falta utilizar este metodo
    delete(id: number) {
        this.service.delete(id)
        .subscribe(
            item => {
                this.loadGrid();
                console.log('Ok.Component.Delete');
                this.item = null;
                this.displayDialog = false;
            }, (error => {
                console.log('Error.Component.Delete');
            }));
    }

}
