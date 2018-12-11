import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Perfil } from '../models/perfil';
import { Usuario } from '../models/usuario';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class PerfilService {
    url = 'https://api.crl.pe/seguridad/api/Roles';

    constructor(private http: HttpClient) {}

    get (id: string, busqueda: string): Observable<Perfil[]> {
        return this.http.get<Perfil[]>(this.url + '?id=' + id + '&busqueda=' + busqueda)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    }

    getUsers (roleId: string): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.url + '/GetUsers?roleId=' + roleId)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    }

    add(perfil: Perfil): Observable<Perfil> {
        return this.http.post<Perfil>(this.url, perfil, httpOptions).pipe(
            tap((perfil: Perfil) => console.log('Ok.Service.Insert.')), // Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Insert.')));
    }

    update(perfil: Perfil): Observable<Perfil> {
        return this.http.put<Perfil>(this.url + '/' + perfil.id, perfil, httpOptions).pipe(
            tap((sistema: Perfil) => console.log('Ok.Service.Update.')), // Respuesta de la API, puede ser un Json
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
