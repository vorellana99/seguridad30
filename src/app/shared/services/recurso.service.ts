import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Recurso } from '../models/recurso';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class RecursoService {
    
    url: string = 'https://api.crl.pe/seguridad/api/Resources';
    
    constructor(private http: HttpClient) {}

    get (id:string, busqueda:string): Observable<Recurso[]> {
        return this.http.get<Recurso[]>(this.url + '?id=' + id + '&busqueda='+ busqueda)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    };

    add(recurso:Recurso): Observable<Recurso>{ // Observable<Recurso> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.post<Recurso>(this.url, recurso, httpOptions).pipe(
            tap((recurso:Recurso) => console.log('Ok.Service.Insert.')), // Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Insert.')));
    }

    update(recurso:Recurso):Observable<Recurso>{ // Observable<Recurso> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.put<Recurso>(this.url + '/' + recurso.id, recurso, httpOptions).pipe(
            tap((recurso:Recurso) => console.log('Ok.Service.Update.')),// Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Update.')));
    }

    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(`${operation} failed_v99: ${error.message}`);
            return of(result as T);
        }
    }

}