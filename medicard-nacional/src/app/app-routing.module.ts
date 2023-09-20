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


//Guards
import { AuthGuard } from './utils/auth.guard';
import { LoginComponent } from './components/feature-components/administradores/login/login.component';
import { CreateUserComponent } from './components/feature-components/administradores/create-user/create-user.component';
import { ListUsersComponent } from './components/feature-components/administradores/list-users/list-users.component';
import { SuperUserComponent } from './components/feature-components/administradores/super-user/super-user.component';

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
  //RUTAS ADMINISTRADOR
  { path: 'login', component: LoginComponent },
  //Ruta para ADMIN_ROLE
  { path: 'list-users', component: ListUsersComponent, canActivate: [AuthGuard] },
  //RUTA PARA SUPER_ROLE
  { path: 'super-user', component: SuperUserComponent, canActivate: [AuthGuard] },
  { path: 'create-user', component: CreateUserComponent},
  { path: 'edit-user/:id', component: CreateUserComponent},
  //ruta para actualizar la fecha de activacion
  { path: 'asegurados/:id/update-activation', component: SuperUserComponent},
  // si pones link erroneo te redirige INICIO
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
