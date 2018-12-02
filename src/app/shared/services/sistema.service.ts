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
    // url: string = 'https://localhost:44308/api/SystemApps';
    url: string = 'https://api.crl.pe/seguridad/api/SystemApps';
    // url: string = 'https://crossorigin.me/https://api.crl.pe/seguridad/api/SystemApps';
    
    constructor(private http: HttpClient) {}

    getSistemas (id:string, busqueda:string): Observable<Sistema[]> {
        return this.http.get<Sistema[]>(this.url + '?id=' + id + '&busqueda='+ busqueda)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    };

    addSistema(sistema:Sistema): Observable<Sistema>{ // Observable<Sistema> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.post<Sistema>(this.url, sistema, httpOptions).pipe(
            tap((sistema:Sistema) => console.log('Ok.Service.Insert.')), // Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Insert.')));
    }

    updateSistema(sistema:Sistema):Observable<Sistema>{ // Observable<Sistema> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.put<Sistema>(this.url + '/' + sistema.id, sistema, httpOptions).pipe(
            tap((sistema:Sistema) => console.log('Ok.Service.Update.')),// Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Update.')));
    }

    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(`${operation} failed_v99: ${error.message}`);
            return of(result as T);
        }
    }

}

/* Anotaciones  
- Se tratan de dejar las respuesta de los errores de la manera mas genérica para que no arrojen errores y estar abiertas a 
    cambios de las respuestas de APIS y no generen inconsistencias

*/