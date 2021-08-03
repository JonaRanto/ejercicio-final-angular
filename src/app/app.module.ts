import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PublicMisionComponent } from './components/public-mision/public-mision.component';
import { PublicVisionComponent } from './components/public-vision/public-vision.component';
import { PublicQuienesSomosComponent } from './components/public-quienes-somos/public-quienes-somos.component';
import { PrivateHeaderComponent } from './components/private-header/private-header.component';
import { PrivateMiPerfilComponent } from './components/private-mi-perfil/private-mi-perfil.component';
import { PrivateCursosComponent } from './components/private-cursos/private-cursos.component';
import { PrivateMisCursosComponent } from './components/private-mis-cursos/private-mis-cursos.component';
import { PrivateFacturacionComponent } from './components/private-facturacion/private-facturacion.component';
import { PrivateDetalleCursoComponent } from './components/private-detalle-curso/private-detalle-curso.component';
import { PrivateEditarPerfilComponent } from './components/private-editar-perfil/private-editar-perfil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    PublicHomeComponent,
    PublicHeaderComponent,
    PublicMisionComponent,
    PublicVisionComponent,
    PublicQuienesSomosComponent,
    PrivateHeaderComponent,
    PrivateMiPerfilComponent,
    PrivateCursosComponent,
    PrivateMisCursosComponent,
    PrivateFacturacionComponent,
    PrivateDetalleCursoComponent,
    PrivateEditarPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
