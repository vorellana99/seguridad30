import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Sistema } from '../../shared/models/sistema';
import { SistemaService } from '../../shared/services/sistema.service';

export class PrimeClass implements Sistema{
    constructor(public id?, public name?, public description?){}
}
@Component({
    selector: 'app-sistemas',
    templateUrl: './sistemas.component.html',
    styleUrls: ['./sistemas.component.scss'],
    animations: [routerTransition()],
    providers:[SistemaService]
})
export class SistemasComponent implements OnInit {
    inpBuscar:string = "";
    newItem: boolean;
    item:Sistema = new PrimeClass();
    items: Sistema[];
    displayDialog: boolean;
    loading: boolean;
    constructor(private service:SistemaService) {}
  
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
    
    add(item:Sistema){
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

    update(item:Sistema){
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
