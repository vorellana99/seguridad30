import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-tipos-recurso',
  templateUrl: './tipos-recurso.component.html',
  styleUrls: ['./tipos-recurso.component.scss'],
  animations: [routerTransition()]
})
export class TiposRecursoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
