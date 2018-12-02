import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss'],
  animations: [routerTransition()]
})
export class PerfilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
