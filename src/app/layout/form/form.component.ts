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
    loading: boolean;
    constructor(private sistemaService:SistemaService) {}

    ngOnInit() {
           
    }

    selectedSistema(){}

    loadGridSistemas(){}

    onRowSelect(){}

    save(){}

    delete(){}
}

