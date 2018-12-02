import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Sistema } from '../../shared/models/sistema';
import { SistemaService } from '../../shared/services/sistema.service';

export class PrimeSistema implements Sistema{
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
    newSistema: boolean;
    sistema:Sistema = new PrimeSistema();
    sistemas: Sistema[];
    displayDialog: boolean;
    loading: boolean;
    constructor(private sistemaService:SistemaService) {}
  
    ngOnInit() {
        this.loadGridSistemas();    
    }

    loadGridSistemas(){
        this.loading = true;
        this.getSistemas('',this.inpBuscar);
    }

    showDialogToAdd() {
        this.newSistema = true;
        this.sistema = new PrimeSistema();
        this.displayDialog = true;
    }

    onRowSelect(event) {
        this.newSistema = false;
        this.sistema = {...event.data};
        this.displayDialog = true;
    }

    save() {
        if (this.newSistema) 
            this.addSistema(this.sistema);
        else
            this.updateSistema(this.sistema);
    }


    getSistemas(id:string,busqueda:string){
        this.sistemaService.getSistemas(id,this.inpBuscar)
        .subscribe(
            sistemas => {
                this.sistemas = sistemas;
                console.log('Ok.Component.Read.');
                // console.log(this.sistemas);
                this.loading = false;
            },(error=>{
                console.log('Error.Component.Read.')
            }));
    }
    
    addSistema(sistema:Sistema){
        this.sistemaService.addSistema(sistema)
        .subscribe(
            sistema => {
                this.loadGridSistemas(); // recarga la grilla
                console.log('Ok.Component.Insert.') // sistema.name
                this.sistema = null;
                this.displayDialog = false;
            },(error=>{
                console.log('Error.Component.Insert.')
            }));
    }

    updateSistema(sistema:Sistema){
        this.sistemaService.updateSistema(sistema)
        .subscribe(
            sistema => {
                this.loadGridSistemas(); // recarga la grilla
                console.log('Ok.Component.Update')  // sistema.name
                this.sistema = null;
                this.displayDialog = false;
            },(error=>{
                console.log('Error.Component.Update.')
            }));
    }
}
