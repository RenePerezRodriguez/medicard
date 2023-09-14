import { Component } from '@angular/core';

@Component({
  selector: 'app-instituciones-oruro',
  templateUrl: './instituciones-oruro.component.html',
  styleUrls: ['./instituciones-oruro.component.scss']
})
export class InstitucionesOruroComponent {

  instituciones = [
    {
      nombre: 'Clínica Natividad',
      especialidad: 'Clínica',
      imagen: 'Natividad.jpg',
      pdfLink: 'https://medicard.com.bo/archivos/areamedica.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
    {
      nombre: 'Studio Dental',
      especialidad: 'Dentista',
      imagen: 'StudioDental.jpg',
      pdfLink: 'https://medicard.com.bo/archivos/areamedica.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
  ];
}
