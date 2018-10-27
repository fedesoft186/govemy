import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PerfilPage } from '../perfil/perfil';
import { Geolocation } from '@ionic-native/geolocation';
import { ConfigPerfilPage } from '../config-perfil/config-perfil';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }
  ionViewDidLoad(){
    this.obtenerPosicion();



  }
  cerrarSesion() {
    
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);

  }
  mostrarPerfiles() {
    

    this.navCtrl.push(PerfilPage);

  }
  obtenerPosicion() {
    this.geolocation.getCurrentPosition().then((coordenadas) => {
    console.log(coordenadas);
    }).catch((error) => {
    console.log('Error getting location', error);
    });
    }

    IrConfPerfil(){
      this.navCtrl.push(ConfigPerfilPage);
   }
  

}
