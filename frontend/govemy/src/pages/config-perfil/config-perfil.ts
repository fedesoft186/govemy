import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
import { AlertController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
/**
 * Generated class for the ConfigPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-perfil',
  templateUrl: 'config-perfil.html',
})
export class ConfigPerfilPage {

  nombre: any;
  apellido: any;
  correo: any;
  fecha_de_nacimiento: any;
  descripcion: any;
  foto: any;
  formacion: any;
  perfil:any;
  perfiles: any;
  usuario: any;
  clave: String;
  id: Number;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    this.consultarUsuarioActual();
    this.consultarperfiles();
  }

  consultarUsuarioActual() {
    this.restProvider.getUsuarioActual()
    .then((data:any) => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.correo = data.correo;
      this.fecha_de_nacimiento=data.fecha_nacimiento;
      this.descripcion=data.descripcionEstudiante;
      this.formacion=data.formacion;
      this.usuario=data.usuario;
      this.perfil=data.perfil;
        this.id = data.id;
    });
    }

    consultarperfiles() {
      this.restProvider.getPerfiles()
        .then(data => {
          this.perfiles = data;
        });
    }

    actualizarDatos() {
      var data = {
        'nombre': this.nombre,
        'apellido': this.apellido,
        'correo': this.correo,
        'descripcionEstudiante':this.descripcion,
        'formacion':this.formacion,
        'id': this.id
      };
      this.restProvider.ActualizarDatos(data).then((response: any)=> {
        console.log(response);
        }

  
      , (err) => {
        console.log(err);
      });
}
}