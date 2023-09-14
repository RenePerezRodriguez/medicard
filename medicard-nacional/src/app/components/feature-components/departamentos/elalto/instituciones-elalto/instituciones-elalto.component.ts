import { Component } from '@angular/core';

@Component({
  selector: 'app-instituciones-elalto',
  templateUrl: './instituciones-elalto.component.html',
  styleUrls: ['./instituciones-elalto.component.scss']
})
export class InstitucionesElaltoComponent {

  instituciones = [
    {
      nombre: 'Praxis El Alto',
      especialidad: 'Clinica',
      imagen: 'Praxis.jpeg',
      pdfLink: 'https://medicard.com.bo/archivos/areamedica.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
  ];
}