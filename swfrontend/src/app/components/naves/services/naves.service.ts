import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatasetNave } from '../models/datasetNave';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  url = 'http://localhost:8080/api/naves/';

  constructor(private httpClient: HttpClient) { }

  getPersonagens(page): Observable<DatasetNave> {
    const params: HttpParams = new HttpParams().set('page', page)

    return this.httpClient.get<DatasetNave>(this.url, { params })
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
