import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CursoDetallePage } from '../curso-detalle/curso-detalle';

/**
 * Generated class for the CursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {
  cursos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    this.consultarCursos() 
  }
  consultarCursos() {
    this.restProvider.getCursos()
      .then(data => {
        this.cursos = data;

      });
  }

  mostrarDetalleCurso(){
    this.navCtrl.push(CursoDetallePage);
  }

}
