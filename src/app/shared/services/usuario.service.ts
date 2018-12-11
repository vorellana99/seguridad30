import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable()
export class UsuarioService {
    url: string = 'https://api.crl.pe/seguridad/api/Users';
    constructor(private http: HttpClient) {}

    get (id:string, busqueda:string): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.url + '?id=' + id + '&busqueda='+ busqueda)
            .pipe(
            tap(_ => console.log('OK.Service.Read.')),
            catchError(this.handleError('Error.Service.Read.', []))
            );
    };

    add(usuario:Usuario): Observable<Usuario>{ // Observable<Usuario> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.post<Usuario>(this.url, usuario, httpOptions).pipe(
            tap((usuario:Usuario) => console.log('Ok.Service.Insert.')), // Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Insert.')));
    }

    update(usuario:Usuario):Observable<Usuario>{ // Observable<Usuario> es el tipo de lo que devuelve a travez de la API. que puede ser TRUE o FALSE, o un model en JSON
        return this.http.put<Usuario>(this.url + '/' + usuario.codigo, usuario, httpOptions).pipe(
            tap((usuario:Usuario) => console.log('Ok.Service.Update.')),// Respuesta de la API, puede ser un Json
            catchError(this.handleError('Error.Service.Update.')));
    }

    delete(id: string): Observable<Usuario> {
        return this.http.delete<Usuario>(this.url + '/' + id, httpOptions).pipe(
            tap((item: Usuario) => console.log('Ok.Service.Delete.')),
            catchError(this.handleError('Error.Service.Delete.')));
    }

    private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(`${operation} failed_v99: ${error.message}`);
            return of(result as T);
        }
    }

}