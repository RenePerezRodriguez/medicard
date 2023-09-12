import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  images: string[] = [
    'https://medicard.com.bo/assets/img/Lirios.jpg',
    'https://medicard.com.bo/assets/img/cold.png',
    'https://medicard.com.bo/assets/img/Marbella.jpg',
    'https://medicard.com.bo/assets/img/Unimagen.jpg',    
    'https://medicard.com.bo/assets/img/red.jpg',
    'https://medicard.com.bo/assets/img/CAO.jpg',
    'https://medicard.com.bo/assets/img/rehabilito.jpg'
    // Agrega aquí las rutas de las imágenes que desees mostrar en el slider
  ];

  ngOnInit() {
    // Configurar el intervalo para el desplazamiento automático
    setInterval(() => {
      this.scrollSlider();
    }, 2000); // Cambiar la imagen cada 3 segundos (ajusta el tiempo según tus preferencias)
  }

  // Método para desplazar el slider
  scrollSlider() {
    const sliderElement = document.getElementById('slider') as HTMLElement;
    sliderElement.scrollLeft += sliderElement.clientWidth;
    // Si llegamos al final, volvemos al inicio
    if (sliderElement.scrollLeft >= (sliderElement.scrollWidth - sliderElement.clientWidth)) {
      sliderElement.scrollLeft = 0;
    }
  }
}
