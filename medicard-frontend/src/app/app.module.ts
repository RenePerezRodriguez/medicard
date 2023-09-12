import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/feature-components/home/home.component';
import { NavbarComponent } from './components/shared-components/navbar/navbar.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { FooterComponent } from './components/shared-components/footer/footer.component';
import { CardformComponent } from './components/feature-components/cardform/cardform.component';
import { DescuentosComponent } from './components/feature-components/descuentos/descuentos.component';
import { ModalDepartamentoComponent } from './components/shared-components/modal-departamento/modal-departamento.component';
import { HomeSantacruzComponent } from './components/feature-components/home-departamentos/home-santacruz/home-santacruz.component';
import { HomeCochabambaComponent } from './components/feature-components/home-departamentos/home-cochabamba/home-cochabamba.component';
import { TrabajaConNosotrosComponent } from './components/feature-components/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { MenuCochabambaComponent } from './components/shared-components/menu-departamentos/menu-cochabamba/menu-cochabamba.component';
import { MenuSantacruzComponent } from './components/shared-components/menu-departamentos/menu-santacruz/menu-santacruz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ImageSliderComponent,
    FooterComponent,
    CardformComponent,
    DescuentosComponent,
    ModalDepartamentoComponent,
    HomeSantacruzComponent,
    HomeCochabambaComponent,
    TrabajaConNosotrosComponent,
    MenuCochabambaComponent,
    MenuSantacruzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
