import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DatasetPlaneta } from '../models/datasetPlaneta';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  url = 'http://localhost:8080/api/planetas/';

  constructor(private httpClient: HttpClient) { }

  getPersonagens(page): Observable<DatasetPlaneta> {
    const params: HttpParams = new HttpParams().set('page', page)

    return this.httpClient.get<DatasetPlaneta>(this.url, { params })
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
