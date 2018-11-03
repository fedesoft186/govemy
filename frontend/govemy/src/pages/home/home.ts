import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PerfilPage } from '../perfil/perfil';

import { Geolocation } from '@ionic-native/geolocation';
import { ConfigPerfilPage } from '../config-perfil/config-perfil';
import { RestProvider } from '../../providers/rest/rest';
import { CursosPage } from '../cursos/cursos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  public category: string = 'inicio';
  public categories: Array<string> = ['noticias', 'inicio', 'cursos']

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public restProvider: RestProvider) {
 
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
  mostrarCursos() {
    

    this.navCtrl.push(CursosPage);

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

   onTabChanged(tabName) {
    this.category = tabName;
  }
  

}
