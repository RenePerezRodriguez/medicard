import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-nacional',
  templateUrl: './navbar-nacional.component.html',
  styleUrls: ['./navbar-nacional.component.scss']
})
export class NavbarNacionalComponent implements OnInit {
  ciudades: any[] = [
    { label: 'Cochabamba', value: '/instituciones-cbba' },
    { label: 'Santa Cruz', value: '/instituciones-santacruz' },
    { label: 'La Paz', value: '/instituciones-lapaz' },
    { label: 'Oruro', value: '/instituciones-oruro' },
    { label: 'Sucre', value: '/instituciones-sucre' },
    { label: 'El Alto', value: '/instituciones-elalto' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Obtenemos la referencia al elemento "Beneficios Ciudades"
    const beneficiosCiudades = document.getElementById("beneficios-ciudades");

    // Obtenemos el submenú
    const submenu = beneficiosCiudades?.querySelector(".submenu");

    // Agregamos un event listener para el clic en "Beneficios"
    beneficiosCiudades?.addEventListener("click", () => {
      // Alternamos la clase "active" para mostrar u ocultar el submenú
      submenu?.classList.toggle("active");
    });

    const hamburgerIcon = document.getElementById("hamburger-icon");
    const menu = document.querySelector(".menu");

    hamburgerIcon?.addEventListener("click", () => {
      menu?.classList.toggle("active");
    });
  }

  navigateToCity(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue) {
      this.router.navigate([selectedValue]);
    }
  }
}
