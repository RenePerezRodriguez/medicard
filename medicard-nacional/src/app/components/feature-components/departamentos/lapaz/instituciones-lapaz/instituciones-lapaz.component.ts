import { Component } from '@angular/core';

@Component({
  selector: 'app-instituciones-lapaz',
  templateUrl: './instituciones-lapaz.component.html',
  styleUrls: ['./../../cochabamba/instituciones/instituciones.component.scss']
})
export class InstitucionesLapazComponent {

  instituciones = [
    {
      nombre: 'Clínica Agramont',
      especialidad: 'Clínica',
      imagen: 'Agramont.jpg',
      pdfLink: 'https://medicard.com.bo/archivos/areamedica.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
    {
      nombre: 'Hospital Arcoiris',
      especialidad: 'Hospital',
      imagen: 'Arcoiris.jpg',
      pdfLink: 'https://medicard.com.bo/archivos/lapaz/Arcoiris.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
    {
      nombre: 'Oncoclinic',
      especialidad: 'Clínica',
      imagen: 'Oncoclinic.jpg',
      pdfLink: 'https://medicard.com.bo/archivos/lapaz/ONCOCLINIC.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
    {
      nombre: 'Oncoservice ',
      especialidad: 'Clínica',
      imagen: 'Oncoservice.jpg',
      pdfLink: 'https://medicard.com.bo/archivos/areamedica.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
    {
      nombre: 'Praxis La Paz',
      especialidad: 'Clínica',
      imagen: 'Praxis.jpeg',
      pdfLink: 'https://medicard.com.bo/archivos/areamedica.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
  ];
}
