import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
// import "rxjs/add/operator/toPromise";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoaUrl = "https://5e43e3db3dfe6c001421f167.mockapi.io/api/pessoas"
  // pessoaUrl = "localhost:8080/api/pessoas"

  constructor(private http: HttpClient) { }


  // pesquisar(): Observable<any> {
  //   // const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
  //   return this.http.get(`${this.pessoaUrl}`);
  // }

  pesquisar(): Promise<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.pessoaUrl}`)
      .toPromise()
      .then(response => response);
  }

  excluir(codigo: number): Promise<void> {

    return this.http.delete(`${this.pessoaUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

}
