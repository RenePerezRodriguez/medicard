import { Component } from '@angular/core';

@Component({
  selector: 'app-instituciones-sucre',
  templateUrl: './instituciones-sucre.component.html',
  styleUrls: ['./../../cochabamba/instituciones/instituciones.component.scss']
})
export class InstitucionesSucreComponent {

  instituciones = [
    {
      nombre: 'Clínica Angeles',
      especialidad: 'Clínica',
      imagen: 'Angeles.jpg',
      pdfLink: 'https://medicard.com.bo/archivos/sucre/losangeles.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
    {
      nombre: 'Praxis Sucre',
      especialidad: 'Clinica',
      imagen: 'Praxis.jpeg',
      pdfLink: 'https://medicard.com.bo/archivos/areamedica.pdf',
      facebookLink: 'https://www.facebook.com/CAO-Cl%C3%ADnica-123456789',
      instagramLink: 'https://www.instagram.com/caoclinica',
      telefonoLink: 'https://wa.me/77484800'
    },
  ];
}