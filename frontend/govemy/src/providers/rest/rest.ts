import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://1730434f.ngrok.io/';
  loginService = 'api/login/';
  perfilService = 'perfiles/';
  cursoService = 'cursos/';
  apiUsuarios = 'usuarios/';
  apiUsuarioActual = 'api/user/';
  apiCambiarContra = 'api/password/change/'

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

  getUsuarioActual() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiUsuarioActual, {
        headers: new HttpHeaders().set('Authorization', 'token ' +
          window.localStorage['token'])
      }).subscribe((data: any) => {
        let usuario = this.getUsuario(data.pk);
        resolve(usuario);
      }, err => {
        console.log(err);
      });
    });
  }
  getUsuario(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiUsuarios + '?user_id=' + id, {
        headers: new HttpHeaders().set('Authorization', 'token ' +
          window.localStorage['token'])
      }).subscribe(data => {
        resolve(data[0]);
      }, err => {
        console.log(err);
      });
    });
  }

  ActualizarDatos(data) {
    return new Promise((resolve, reject) => {
      console.log("123");
      this.http.patch(this.apiUrl + this.apiUsuarios + data.id + "/", data, {
        headers: new HttpHeaders().set('Authorization', 'token ' +
          window.localStorage['token'])
      }) .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  CambiarContra(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.apiCambiarContra, data, {
        headers: new HttpHeaders().set('Authorization', 'token ' +
          window.localStorage['token'])
      }) .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }



}
