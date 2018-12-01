import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Sistema } from '../models/sistema';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class SistemaService {
    url: string = 'https://localhost:44308/api/SystemApps';
    
    constructor(private http: HttpClient) {}

    getSistemas (id:string, busqueda:string): Observable<Sistema[]> {
        // this.url = this.url + '?id=' + id + '&busqueda='+ busqueda;
        return this.http.get<Sistema[]>(this.url + '?id=' + id + '&busqueda='+ busqueda)
            .pipe(
            tap(_ => console.log('OK. sistema.service: getSistemas')),
            catchError(this.handleError('Error. sistema.service: getSistemas', []))
            );
    };

    addSistema(sistema:Sistema): Observable<Sistema>{
        return this.http.post<Sistema>(this.url, sistema, httpOptions).pipe(
            tap((sistema:Sistema) => console.log('OK. sistema.service addSistema add sistema is: ' + sistema.name)),
            catchError(this.handleError('Error. sistema.service: addSistema')));
    }

    updateSistema(sistema:Sistema):Observable<Sistema>{ // Observable<Sistema> es lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.put<Sistema>(this.url + '/' + sistema.id, sistema, httpOptions).pipe(
            tap((sistema:Sistema) => console.log('OK. sistema.service updateSistema update sistema is: ' + sistema.name)),
            catchError(this.handleError('Error. sistema.service: updateSistema')));
    }


    /* Analizar y mejorar */
    // Método para el manejo de los errores
    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(error + '/ catchError');
            return of(result as T);
        }
    }

}