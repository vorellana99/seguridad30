import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Trabajador } from '../models/trabajador';

@Injectable()
export class TrabajadorService {
    // url: string = 'https://localhost:44308/api/Trabajadores?busqueda=ore';
    url: string = 'https://localhost:44308/api/Trabajadores?busqueda=';
    
    constructor(private http: HttpClient) {}

    getTrabajador (txtBuscar:string): Observable<Trabajador[]> {
        return this.http.get<Trabajador[]>(this.url + txtBuscar)
            .pipe(
            tap(_ => console.log('cinco')),
            catchError(this.handleError('getHeroes', []))
            );
    };

    /* Analizar y mejorar */
    // Método para el manejo de los errores
    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(error + '/ catchError');
            return of(result as T);
        }
    }

}