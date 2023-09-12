import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/feature-components/home/home.component';
import { DescuentosComponent } from './components/feature-components/descuentos/descuentos.component';
import { HomeCochabambaComponent } from './components/feature-components/home-departamentos/home-cochabamba/home-cochabamba.component';
import { TrabajaConNosotrosComponent } from './components/feature-components/trabaja-con-nosotros/trabaja-con-nosotros.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'descuentos', component: DescuentosComponent }, //ruta de la pagina beneficios
  { path: 'home-cochabamba', component: HomeCochabambaComponent },
  { path: 'trabaja-con-nosotros', component: TrabajaConNosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
