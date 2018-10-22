import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://afce5f01.ngrok.io/';
  loginService = 'api/login/';
  perfilService = 'perfiles/';
  cursoService = 'cursos/';
  apiUsuarios = 'usuarios/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.loginService, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
    }
  registro(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + this.apiUsuarios, data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  getPerfiles() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl + this.perfilService).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
    getCursos() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl + this.cursoService).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
    
    

    
}
