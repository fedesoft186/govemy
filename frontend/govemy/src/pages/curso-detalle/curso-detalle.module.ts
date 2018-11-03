import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoDetallePage } from './curso-detalle';

@NgModule({
  declarations: [
    CursoDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(CursoDetallePage),
  ],
})
export class CursoDetallePageModule {}
