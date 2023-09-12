import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/feature-components/nacional/home/home.component';
import { HomeUsuarioComponent } from './components/feature-components/nacional/home-usuario/home-usuario.component';
import { InstitucionesComponent } from './components/feature-components/departamentos/cochabamba/instituciones/instituciones.component';
import { TrabajaConNosotrosComponent } from './components/feature-components/departamentos/cochabamba/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { RegistroUsuarioComponent } from './components/feature-components/nacional/registro-usuario/registro-usuario.component';
import { InstitucionesSucreComponent } from './components/feature-components/departamentos/sucre/instituciones-sucre/instituciones-sucre.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'home-usuario', component: HomeUsuarioComponent }, // Ruta para la página home de usuario
  { path: 'instituciones-cbba', component: InstitucionesComponent },
  { path: 'instituciones-sucre', component: InstitucionesSucreComponent },
  { path: 'trabaja-con-nosotros', component: TrabajaConNosotrosComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
