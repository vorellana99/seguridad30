import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Permiso } from '../models/permiso';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class PermisoService {
    
    url: string = 'https://api.crl.pe/seguridad/api/Permissions';
        
    constructor(private http: HttpClient) {}

    get (roleId:string): Observable<Permiso[]> {
        return this.http.get<Permiso[]>(this.url + '?RoleId=' + roleId)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    };

    add(item:Permiso): Observable<Permiso>{ // Observable<Sistema> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.post<Permiso>(this.url, item, httpOptions).pipe(
            tap((item:Permiso) => console.log('Ok.Service.Insert.')), // Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Insert.')));
    }

    // falta adaptar
    // update(item:Permiso):Observable<Permiso>{ // Observable<Sistema> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
    //     return this.http.put<Permiso>(this.url + '/' + item.id, item, httpOptions).pipe(
    //         tap((item:Permiso) => console.log('Ok.Service.Update.')),// Respuesta de la API, puede ser un Json
    //         catchError(this.handleError('Error.Service.Update.')));
    // }

    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(`${operation} failed_v99: ${error.message}`);
            return of(result as T);
        }
    }

}
