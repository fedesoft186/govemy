import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  nombre: String;
  apellido: String;
  correo: String;
  fecha_de_nacimiento: Date;
  perfil:any;
  perfiles: any;
  usuario: String;
  clave: String;
  num_documento: String;
  Curso: any;
  cursos: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    this.consultarperfiles();
    this.consultarcursos();
  }
  consultarperfiles() {
    this.restProvider.getPerfiles()
      .then(data => {
        this.perfiles = data;
      });
  }
  consultarcursos() {
    this.restProvider.getCursos()
      .then(data => {
        this.cursos = data;
      });
  }
  iniciarRegistro() {
    var data = {
      'nombre': this.nombre,
      'apellido': this.apellido,
      'correo': this.correo,
      'fecha_nacimiento': this.fecha_de_nacimiento,
      'perfil': this.perfil,
      'username': this.usuario,
      'password': this.clave,
      'curso': this.Curso,


    };
    this.restProvider.registro(data).then((result: any) => {

      var data = { 'username': this.usuario, 'password': this.clave };
      this.restProvider.login(data)
      .then((data:any)=> {
        window.localStorage['token']=data.key;
        this.navCtrl.setRoot(HomePage);
      });

    }, (err) => {
      console.log(err);
    });
  }


}
