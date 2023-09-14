import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/feature-components/nacional/home/home.component';
import { HomeUsuarioComponent } from './components/feature-components/nacional/home-usuario/home-usuario.component';
import { InstitucionesComponent } from './components/feature-components/departamentos/cochabamba/instituciones/instituciones.component';
import { RegistroUsuarioComponent } from './components/feature-components/nacional/registro-usuario/registro-usuario.component';
import { InstitucionesSucreComponent } from './components/feature-components/departamentos/sucre/instituciones-sucre/instituciones-sucre.component';
import { InstitucionesSantacruzComponent } from './components/feature-components/departamentos/santacruz/instituciones-santacruz/instituciones-santacruz.component';
import { InstitucionesLapazComponent } from './components/feature-components/departamentos/lapaz/instituciones-lapaz/instituciones-lapaz.component';
import { InstitucionesOruroComponent } from './components/feature-components/departamentos/oruro/instituciones-oruro/instituciones-oruro.component';
import { InstitucionesElaltoComponent } from './components/feature-components/departamentos/elalto/instituciones-elalto/instituciones-elalto.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'home-usuario', component: HomeUsuarioComponent }, // Ruta para la página home de usuario

  { path: 'instituciones-cbba', component: InstitucionesComponent },
  { path: 'instituciones-santacruz', component: InstitucionesSantacruzComponent },
  { path: 'instituciones-lapaz', component: InstitucionesLapazComponent },
  { path: 'instituciones-oruro', component: InstitucionesOruroComponent },
  { path: 'instituciones-sucre', component: InstitucionesSucreComponent },
  { path: 'instituciones-elalto', component: InstitucionesElaltoComponent },

  { path: 'registro-usuario', component: RegistroUsuarioComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
