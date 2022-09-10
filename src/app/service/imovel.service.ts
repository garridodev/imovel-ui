import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Imovel } from '../model/imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  url = 'http://localhost:3000/imovel';

  constructor(
    private httpCliente: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  buscarImovel(idImovel: Imovel): Observable<any> {
    return this.httpCliente.get<any>(this.url + '/' + idImovel)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  buscarTodosImoveis(): Observable<any> {
    return this.httpCliente.get<any>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
  buscarImovelPorCep(cep: string) {
    let params = new HttpParams();
    
    params = params.append('endereco.cep', cep);

    return this.httpCliente.get<any>(this.url + '/', {params: params})
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
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
