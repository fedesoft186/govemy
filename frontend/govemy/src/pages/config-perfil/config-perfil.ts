import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  claveNueva: String;
  id: Number;
  imagen: any;

  options: CameraOptions = {
    quality: 70,
    targetWidth: 500,
    targetHeight: 500,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public restProvider: RestProvider) {
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

cambiarContra() {
    var data = {
    'new_password1': this.clave,
    'new_password2': this.claveNueva,
    };
    this.restProvider.CambiarContra(data).then((response: any)=> {
      console.log(response);
      }


    , (err) => {
      console.log(err);
    });
}

tomarFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    this.imagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    // Handle error
    });
    }
}