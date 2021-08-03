import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateCursosComponent } from './components/private-cursos/private-cursos.component';
import { PrivateDetalleCursoComponent } from './components/private-detalle-curso/private-detalle-curso.component';
import { PrivateEditarPerfilComponent } from './components/private-editar-perfil/private-editar-perfil.component';
import { PrivateFacturacionComponent } from './components/private-facturacion/private-facturacion.component';
import { PrivateMiPerfilComponent } from './components/private-mi-perfil/private-mi-perfil.component';
import { PrivateMisCursosComponent } from './components/private-mis-cursos/private-mis-cursos.component';
import { PrivateComponent } from './components/private/private.component';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { PublicMisionComponent } from './components/public-mision/public-mision.component';
import { PublicQuienesSomosComponent } from './components/public-quienes-somos/public-quienes-somos.component';
import { PublicVisionComponent } from './components/public-vision/public-vision.component';
import { PublicComponent } from './components/public/public.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: '', component: PublicHomeComponent },
      { path: 'home', component: PublicHomeComponent },
      { path: 'mision', component: PublicMisionComponent },
      { path: 'vision', component: PublicVisionComponent },
      { path: 'quienes-somos', component: PublicQuienesSomosComponent }
    ]
  },
  {
    path: 'private', component: PrivateComponent, children: [
      { path: '', component: PrivateCursosComponent },
      { path: 'cursos', component: PrivateCursosComponent },
      { path: 'detalle-curso/:id', component: PrivateDetalleCursoComponent },
      { path: 'mi-perfil', component: PrivateMiPerfilComponent },
      { path: 'editar-perfil/:id', component: PrivateEditarPerfilComponent },
      { path: 'mis-cursos', component: PrivateMisCursosComponent },
      { path: 'facturacion', component: PrivateFacturacionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
