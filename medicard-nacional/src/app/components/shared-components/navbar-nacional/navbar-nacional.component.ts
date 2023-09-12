import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-nacional',
  templateUrl: './navbar-nacional.component.html',
  styleUrls: ['./navbar-nacional.component.scss']
})
export class NavbarNacionalComponent {
  ciudades: any[] = [
    { label: 'Ciudades', value: '', routerLink: '' },
    { label: 'Cochabamba', value: 'Cochabamba', routerLink: '/instituciones-cbba' },
    { label: 'Santa Cruz', value: 'Santa Cruz', routerLink: '/ciudad2' },
    { label: 'La Paz', value: 'La Paz', routerLink: '/ciudad3' },
    { label: 'Oruro', value: 'Oruro', routerLink: '/ciudad4' },
    { label: 'Sucre', value: 'Sucre', routerLink: '/instituciones-sucre' },
    { label: 'El Alto', value: 'El Alto', routerLink: '/ciudad6' }
  ];
}
