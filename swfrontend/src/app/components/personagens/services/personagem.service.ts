import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatasetPersonagem } from '../models/datasetPersonagem';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  url = 'http://localhost:8080/api/personagens/';

  constructor(private httpClient: HttpClient) { }

  getPersonagens(page): Observable<DatasetPersonagem> {
    const params: HttpParams = new HttpParams().set('page', page)

    return this.httpClient.get<DatasetPersonagem>(this.url, { params })
      .pipe(catchError(this.handleError));
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
