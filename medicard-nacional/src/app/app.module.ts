import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    TrabajaconnosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
