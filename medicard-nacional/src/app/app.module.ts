import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
//import para la integracion Frontend- Backend
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarNacionalComponent } from './components/shared-components/navbar-nacional/navbar-nacional.component';
import { FooterNacionalComponent } from './components/shared-components/footer-nacional/footer-nacional.component';
import { HomeUsuarioComponent } from './components/feature-components/nacional/home-usuario/home-usuario.component';
import { NavbarUsuarioComponent } from './components/shared-components/navbar-usuario/navbar-usuario.component';
import { InstitucionesComponent } from './components/feature-components/departamentos/cochabamba/instituciones/instituciones.component';
import { RegistroUsuarioComponent } from './components/feature-components/nacional/registro-usuario/registro-usuario.component';
import { InstitucionesSucreComponent } from './components/feature-components/departamentos/sucre/instituciones-sucre/instituciones-sucre.component';
import { InstitucionesSantacruzComponent } from './components/feature-components/departamentos/santacruz/instituciones-santacruz/instituciones-santacruz.component';
import { InstitucionesLapazComponent } from './components/feature-components/departamentos/lapaz/instituciones-lapaz/instituciones-lapaz.component';
import { InstitucionesOruroComponent } from './components/feature-components/departamentos/oruro/instituciones-oruro/instituciones-oruro.component';
import { InstitucionesElaltoComponent } from './components/feature-components/departamentos/elalto/instituciones-elalto/instituciones-elalto.component';
import { ContactanosComponent } from './components/feature-components/departamentos/cochabamba/contactanos/contactanos.component';
import { TrabajaconnosotrosComponent } from './components/feature-components/departamentos/cochabamba/trabajaconnosotros/trabajaconnosotros.component';
import { CreateUserComponent } from './components/feature-components/administradores/create-user/create-user.component';
import { ListUsersComponent } from './components/feature-components/administradores/list-users/list-users.component';
import { LoginComponent } from './components/feature-components/administradores/login/login.component';
import { SuperUserComponent } from './components/feature-components/administradores/super-user/super-user.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarNacionalComponent,
    FooterNacionalComponent,
    HomeUsuarioComponent,
    NavbarUsuarioComponent,
    InstitucionesComponent,
    RegistroUsuarioComponent,
    InstitucionesSucreComponent,
    InstitucionesSantacruzComponent,
    InstitucionesLapazComponent,
    InstitucionesOruroComponent,
    InstitucionesElaltoComponent,
    ContactanosComponent,
    TrabajaconnosotrosComponent,
    CreateUserComponent,
    ListUsersComponent,
    LoginComponent,
    SuperUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-middle-center',
      preventDuplicates: true,
      progressAnimation: 'increasing',
    }),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
