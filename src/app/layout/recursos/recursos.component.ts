import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss'],
  animations: [routerTransition()]
})
export class RecursosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
