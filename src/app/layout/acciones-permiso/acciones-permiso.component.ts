import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-acciones-permiso',
  templateUrl: './acciones-permiso.component.html',
  styleUrls: ['./acciones-permiso.component.scss'],
  animations: [routerTransition()]
})
export class AccionesPermisoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
