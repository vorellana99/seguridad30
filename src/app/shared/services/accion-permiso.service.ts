import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AccionPermiso } from '../models/accion-permiso';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AccionPermisoService {
    url = 'https://api.crl.pe/seguridad/api/PermissionActions';

    constructor(private http: HttpClient) {}

    get (id: string, busqueda: string): Observable<AccionPermiso[]> {
        return this.http.get<AccionPermiso[]>(this.url + '?id=' + id + '&busqueda=' + busqueda)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    }

    add(accionPermiso: AccionPermiso): Observable<AccionPermiso> { // Observable<AccionPermiso> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.post<AccionPermiso>(this.url, accionPermiso, httpOptions).pipe(
            tap((accionPermiso: AccionPermiso) => console.log('Ok.Service.Insert.')), // Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Insert.')));
    }

    update(accionPermiso: AccionPermiso): Observable<AccionPermiso> { // Observable<AccionPermiso> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.put<AccionPermiso>(this.url + '/' + accionPermiso.id, accionPermiso, httpOptions).pipe(
            tap((sistema: AccionPermiso) => console.log('Ok.Service.Update.')), // Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Update.')));
    }


    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed_v99: ${error.message}`);
            return of(result as T);
        };
    }

}

/* Anotaciones
- Se tratan de dejar las respuesta de los errores de la manera mas genérica para que no arrojen errores y estar abiertas a
    cambios de las respuestas de APIS y no generen inconsistencias
*/
