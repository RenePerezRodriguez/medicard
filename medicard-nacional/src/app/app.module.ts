import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarNacionalComponent } from './components/shared-components/navbar-nacional/navbar-nacional.component';
import { FooterNacionalComponent } from './components/shared-components/footer-nacional/footer-nacional.component';
import { HomeUsuarioComponent } from './components/feature-components/nacional/home-usuario/home-usuario.component';
import { NavbarUsuarioComponent } from './components/shared-components/navbar-usuario/navbar-usuario.component';
import { InstitucionesComponent } from './components/feature-components/departamentos/cochabamba/instituciones/instituciones.component';
import { TrabajaConNosotrosComponent } from './components/feature-components/departamentos/cochabamba/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { RegistroUsuarioComponent } from './components/feature-components/nacional/registro-usuario/registro-usuario.component';
import { InstitucionesSucreComponent } from './components/feature-components/departamentos/sucre/instituciones-sucre/instituciones-sucre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarNacionalComponent,
    FooterNacionalComponent,
    HomeUsuarioComponent,
    NavbarUsuarioComponent,
    InstitucionesComponent,
    TrabajaConNosotrosComponent,
    RegistroUsuarioComponent,
    InstitucionesSucreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
