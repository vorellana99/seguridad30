import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TipoRecurso } from '../models/tipo-recurso';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class TipoRecursoService {
    url: string = 'https://api.crl.pe/seguridad/api/TypeResources';
    
    constructor(private http: HttpClient) {}

    get (id:string, busqueda:string): Observable<TipoRecurso[]> {
        return this.http.get<TipoRecurso[]>(this.url + '?id=' + id + '&busqueda='+ busqueda)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    };

    add(tipoRecurso:TipoRecurso): Observable<TipoRecurso>{ // Observable<TipoRecurso> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.post<TipoRecurso>(this.url, tipoRecurso, httpOptions).pipe(
            tap((tipoRecurso:TipoRecurso) => console.log('Ok.Service.Insert.')), // Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Insert.')));
    }

    update(tipoRecurso:TipoRecurso):Observable<TipoRecurso>{ // Observable<TipoRecurso> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.put<TipoRecurso>(this.url + '/' + tipoRecurso.id, tipoRecurso, httpOptions).pipe(
            tap((tipoRecurso:TipoRecurso) => console.log('Ok.Service.Update.')),// Respuesta de la API, puede ser un Json
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