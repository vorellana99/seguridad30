import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DetallePermiso } from '../models/detalle-permiso';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class DetallePermisoService {
    
    url: string = 'https://api.crl.pe/seguridad/api/PermissionDetails';
        
    constructor(private http: HttpClient) {}

    get (id:string, busqueda:string): Observable<DetallePermiso[]> {
        return this.http.get<DetallePermiso[]>(this.url + '?id=' + id + '&busqueda='+ busqueda)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    };

    add(item:DetallePermiso): Observable<DetallePermiso>{ // Observable<Sistema> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.post<DetallePermiso>(this.url, item, httpOptions).pipe(
            tap((item:DetallePermiso) => console.log('Ok.Service.Insert.')), // Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Insert.')));
    }

    update(item:DetallePermiso):Observable<DetallePermiso>{ // Observable<Sistema> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.put<DetallePermiso>(this.url + '/' + item.id, item, httpOptions).pipe(
            tap((item:DetallePermiso) => console.log('Ok.Service.Update.')),// Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Update.')));
    }

    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(`${operation} failed_v99: ${error.message}`);
            return of(result as T);
        }
    }
}