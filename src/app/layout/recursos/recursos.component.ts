import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Recurso } from '../../shared/models/recurso';
import { RecursoService } from '../../shared/services/recurso.service';
import { TipoRecursoService } from '../../shared/services/tipo-recurso.service';
import { TipoRecurso } from 'src/app/shared/models/tipo-recurso';
import { MessageService } from 'primeng/api';
export class PrimeClass implements Recurso {
  constructor(public id?, public name?, public typeResourceId? , public url?, public description?) {}
}
@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss'],
  animations: [routerTransition()],
  providers: [RecursoService, TipoRecursoService, MessageService]
})
export class RecursosComponent implements OnInit {
  inpBuscar = '';
  newItem: boolean;
  item: Recurso = new PrimeClass();
  items: Recurso[];
  displayDialog: boolean;
  loading: boolean;
  tiposRecurso: TipoRecurso[];

  constructor(private service: RecursoService, private tipoRecursoService: TipoRecursoService, private messageService: MessageService) {}

  ngOnInit() {
      this.loadGrid();
      this.getTiposRecurso();
  }

  loadGrid() {
      this.loading = true;
      this.get('', this.inpBuscar);
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
    if (this.item.name == null || this.item.typeResourceId == null ||
        this.item.url == null || this.item.description == null) {
        return false;
    }
    if (this.item.name.trim() === ''  || this.item.typeResourceId.trim() === '' ||
        this.item.url.trim() === '' || this.item.description.trim() === '') {
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

  get(id: string, busqueda: string) {
      this.service.get(id, this.inpBuscar)
      .subscribe(
          items => {
              this.items = items;
              console.log('Ok.Component.Read.');
              this.loading = false;
          }, (error => {
              console.log('Error.Component.Read.');
          }));
  }

  add(item: Recurso) {
      this.service.add(item)
      .subscribe(
          item => {
                this.messageService.add({key: 'tst-info', severity: 'info', detail: 'Se agregó el Recurso.'});
                this.loadGrid(); // recarga la grilla
                console.log('Ok.Component.Insert.');
                this.item = null;
                this.displayDialog = false;
          }, (error => {
              console.log('Error.Component.Insert.');
          }));
  }

  update(item: Recurso) {
      this.service.update(item)
      .subscribe(
          item => {
                this.messageService.add({key: 'tst-info', severity: 'info', detail: 'Se actualizó el Recurso.'});
                this.loadGrid(); // recarga la grilla
                console.log('Ok.Component.Update');
                this.item = null;
                this.displayDialog = false;
          }, (error => {
              console.log('Error.Component.Update.');
          }));
  }

  delete() {}

  getTiposRecurso() {
    this.tipoRecursoService.get('', '')
    .subscribe(
        items => {
            this.tiposRecurso = items;
            console.log('Ok.Component.Read.');

        }, (error => {
            console.log('Error.Component.Read.');
        }));
  }

}
