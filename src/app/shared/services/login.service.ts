import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'https://api.crl.pe/seguridad/api/Roles';
  constructor(
    private http: HttpClient
    // ,private messageService: MessageService
    ) { }

      /** GET heroes from the server */

  getData_01():void{
    this.http.get(this.url).
      subscribe(data => {
        console.log('Next in Get 01');
        console.log(data);
      },
      (error:any) =>{
        console.log('Error in Get 01');
      });
  }


    /** GET heroes from the server */
  getData_02 (): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.url)
      .pipe(
        tap(_ => console.log('cinco')),
        catchError(this.handleError('getHeroes', []))
      );
  }


    /* Analizar y mejorar */
    // Método para el manejo de los errores
    private handleError<T> (operation = 'operation', result?: T){
      return (error: any): Observable<T> => {
        console.log(error + '/ catchError');
        return of(result as T);
      }
    }

}

class Rol {
  description: string;
  permissions: string;
  id: string;
  name: string;
  normalizedName: string;
  concurrencyStamp: string;
}