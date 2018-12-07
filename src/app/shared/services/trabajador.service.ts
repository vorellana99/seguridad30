import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Trabajador } from '../models/trabajador';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class TrabajadorService {

    url: string = 'https://api.crl.pe/seguridad/api/Trabajadores?busqueda=';
    
    constructor(private http: HttpClient) {}

    get (busqueda:string): Observable<Trabajador[]> {
        return this.http.get<Trabajador[]>(this.url + busqueda)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    };

    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(`${operation} failed_v99: ${error.message}`);
            return of(result as T);
        }
    }

}