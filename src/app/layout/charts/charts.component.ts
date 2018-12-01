import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Trabajador } from '../../shared/models/trabajador';
import { TrabajadorService } from '../../shared/services/trabajador.service';
// import { LoginComponent } from 'src/app/login/login.component';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()],
    providers:[TrabajadorService]
})
export class ChartsComponent implements OnInit {
    inpBuscar:string = "";
    trabajadores: Trabajador[];

    constructor(private trabajadorService: TrabajadorService) { }

    ngOnInit() {
        this.getTrabajadores();
    }

    loadGridTrabajadores(){
        console.log("cargando trabajadores...");
        console.log(this.inpBuscar);
        this.getTrabajadores();
    }

    getTrabajadores(){
        this.trabajadorService.getTrabajador(this.inpBuscar)
        .subscribe(trabajadores => {
            this.trabajadores = trabajadores;
            console.log('Test Get Trabajadores ps');
            console.log(this.trabajadores);
            //console.log(this.trabajadores[0].nombre);
        })
    }

}
