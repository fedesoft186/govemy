import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: String;
  clave: String;


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    if (window.localStorage['token']) {
      this.navCtrl.setRoot(HomePage);

    }

  }
  hacerLogin() {
    //llamado al api loclahost:8000/api/login/
    var data = { 'username': this.usuario, 'password': this.clave };
    console.log(this.usuario)
    if (this.usuario == null && this.clave == null) {
      const alert = this.alertCtrl.create({
        title: 'GOVEMY',
        subTitle: 'Llena todos los campos',
        buttons: ['OK']

      });
      alert.present();
      return false;
    }

    if (this.usuario == null) {

      const alert = this.alertCtrl.create({
        title: 'GOVEMY',
        subTitle: 'Llena el campo de Usuario',
        buttons: ['OK']

      });
      alert.present();
      return false;
    }
    if (this.clave == null) {
      const alert = this.alertCtrl.create({
        title: 'GOVEMY',
        subTitle: 'Llena el campo de Contraseña',
        buttons: ['OK']

      });
      
      alert.present();
      return false;
    }

    if (this.usuario == "" && this.clave == "") {
      const alert = this.alertCtrl.create({
        title: 'GOVEMY',
        subTitle: 'Llena todos los campos',
        buttons: ['OK']

      });
      alert.present();
      return false;
    }

    if (this.usuario == "") {

      const alert = this.alertCtrl.create({
        title: 'GOVEMY',
        subTitle: 'Llena el campo de Usuario',
        buttons: ['OK']

      });
      alert.present();
      return false;
    }
    if (this.clave == "") {
      const alert = this.alertCtrl.create({
        title: 'GOVEMY',
        subTitle: 'Llena el campo de Contraseña',
        buttons: ['OK']

      });
      alert.present();
      return false;
    }





    this.restProvider.login(data)
      .then((data: any) => {
        window.localStorage['token'] = data.key;
        this.navCtrl.setRoot(HomePage);

      });





  }
  mostrarRegistro() {
    this.navCtrl.push(RegistroPage);



  }
}
