import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  cerrarSesion() {
    
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);

  }
  mostrarPerfiles() {
    

    this.navCtrl.push(PerfilPage);

  }
  

}
