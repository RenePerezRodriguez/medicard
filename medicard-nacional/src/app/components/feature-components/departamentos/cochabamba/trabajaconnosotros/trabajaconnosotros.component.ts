import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajaconnosotros',
  templateUrl: './trabajaconnosotros.component.html',
  styleUrls: ['./trabajaconnosotros.component.scss']
})
export class TrabajaconnosotrosComponent {

  constructor() {}

  contactarInstituciones() {
    // Redireccionar a un número de teléfono con mensaje personalizado para Instituciones
    window.location.href = 'tel:77484800&body=Hola, estoy interesado en obtener más información para mi institución.';
  }

  contactarEjecutivos() {
    // Redireccionar a un número de teléfono con mensaje personalizado para Ejecutivos
    window.location.href = 'tel:77484800&body=Hola, estoy interesado en obtener más información sobre los ejecutivos de venta.';
  }
}