import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Sistema } from '../../shared/models/sistema';
import { SistemaService } from '../../shared/services/sistema.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class PrimeSistema implements Sistema{
    constructor(public id?, public name?, public description?){}
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers:[SistemaService]
})
export class FormComponent implements OnInit {
    inpBuscar:string = "";
    newSistema: boolean;
    sistema:Sistema = new PrimeSistema();
    sistemas: Sistema[];
    displayDialog: boolean;
    constructor(private sistemaService:SistemaService) {}

    ngOnInit() {
        this.getSistemas('',this.inpBuscar);
    }

    loadGridSistemas(){
        console.log("cargando trabajadores...");
        console.log(this.inpBuscar);
        this.getSistemas('',this.inpBuscar);
    }

    getSistemas(id:string,busqueda:string){
        this.sistemaService.getSistemas(id,this.inpBuscar)
        .subscribe(sistemas => {
            this.sistemas = sistemas;
            console.log('Test Get Trabajadores');
            console.log(this.sistemas);
            //console.log(this.trabajadores[0].nombre);
        })
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

    addSistema(sistema:Sistema){
        this.sistemaService.addSistema(sistema)
        .subscribe(
            sistema2 => {
                this.getSistemas('',this.inpBuscar); // recarga la grilla
                console.log('component se inserto:' + sistema2.name)
                this.sistema = null;
                this.displayDialog = false;
         });
    }

    updateSistema(sistema:Sistema){
        this.sistemaService.updateSistema(sistema)
        .subscribe(
            sistema2 => {
                this.getSistemas('',this.inpBuscar); // recarga la grilla
                console.log('component se actualizó:') 
                // ME QUEDE AQUI...
                // ADEMAS SI ENTRO AQUI ES QUE TODO FUE EXITOSO. VER SI DEVOLVEMOS UN JSON...
                // console.log('component se actualizó:' + sistema2.name) // devuelve null x que la API no devuelve nada
                this.sistema = null;
                this.displayDialog = false;
         });
    }
}
