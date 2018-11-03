import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { PerfilPage } from '../pages/perfil/perfil';
import { RegistroPage } from '../pages/registro/registro';
import { Geolocation } from '@ionic-native/geolocation';
import { ConfigPerfilPage } from '../pages/config-perfil/config-perfil';
import { Camera } from '@ionic-native/camera';
import { CursosPage } from '../pages/cursos/cursos';
import { CursoDetallePage } from '../pages/curso-detalle/curso-detalle';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PerfilPage,
    RegistroPage,
    ConfigPerfilPage,
    CursosPage,
    CursoDetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PerfilPage,
    RegistroPage,
    ConfigPerfilPage,
    CursosPage, 
    CursoDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    RestProvider,
    Geolocation,
    Camera
    
  ]
})
export class AppModule {}
