import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;
  // private jwtHelper: JwtHelperService
  constructor(private http: HttpClient)
  {
    // this.carregarToken();
   }

   login(usuario: string, senha: string): Observable<any> {

    const params = new HttpParams();

    // let headers = new HttpHeaders()
    // .set('Authorization', 'Basic YW5ndWxhckNsaWVudDabbed1bGFyS2V5')
    // .set('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=admin@algamoney.com&password=senhaadmin&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, {
     headers: new HttpHeaders()
      .set('Authorization', 'Basic YW5ndWxhckNsaWVudDphbmd1bGFyS2V5')
      .set('Content-Type', 'application/x-www-form-urlencoded')});
}

  //  login(usuario: string, senha: string): Promise<void> {

  //   const headers = new HttpHeaders()
  //    .append('Authorization', 'Basic YW5ndWxhckNsaWVudDabbed1bGFyS2V5')
  //    .append('Content-Type', 'application/x-www-form-urlencoded');

  //   const body = `username=${usuario}&password=${senha}&grant_type=password`;
  //   return this.http.post(this.oauthTokenUrl, body, { headers
  //     // headers: new HttpHeaders()
  //     //   .append('Authorization', 'Basic YW5ndWxhckNsaWVudDphbmd1bGFyS2V5')
  //     //   .append('Content-Type', 'application/x-www-form-urlencoded')
  //     })
  //     .toPromise()
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(response => {
  //       console.log(response);
  //     });
  // }

  // login(usuario: string, senha: string): Promise<void> {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   headers.append('Authorization', 'Basic YW5ndWxhckNsaWVudDphbmd1bGFyS2V5');

  //   const body = `username=${usuario}&password=${senha}&grant_type=password`;

  //   return this.http.post(this.oauthTokenUrl, body)
  //     .toPromise()
  //     .then(response => {
  //       console.log(response);
  //       this.armazenarToken(response['access_token']);
  //     })
  //     .catch(response => {
  //       if (response.status === 400) {
  //         const responseJson = response.json();

  //         if (responseJson.error === 'invalid_grant') {
  //           return Promise.reject('Usuário ou senha inválida!');
  //         }
  //       }

  //       return Promise.reject(response);
  //     });
  // }

  // private armazenarToken(token: string) {
  //   this.jwtPayload = this.jwtHelper.decodeToken(token);
  //   localStorage.setItem('token', token);
  // }

  // private carregarToken() {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     this.armazenarToken(token);
  //   }
  // }

}
