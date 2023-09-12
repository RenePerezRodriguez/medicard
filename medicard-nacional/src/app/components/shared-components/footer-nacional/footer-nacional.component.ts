import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer-nacional',
  templateUrl: './footer-nacional.component.html',
  styleUrls: ['./footer-nacional.component.scss']
})
export class FooterNacionalComponent implements OnInit {
  statistics: any[] = [
    { title: 'Número de Tarjetas Vendidas', number: 1500000, iconClass: 'fa-credit-card' },
    { title: 'Número de Clínicas Asociadas', number: 300, iconClass: 'fa-hospital' },
    { title: 'Años Trabajando', number: 10, iconClass: 'fa-clock' },
    { title: 'Empresas e Instituciones', number: 500, iconClass: 'fa-bar-chart' },
    { title: 'Ejecutivos de ventas', number: 1000, iconClass: 'fa-users' }
  ];

  isHomeUsuario: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomeUsuario = event.url === '/home-usuario'; // Reemplaza con la ruta correcta
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkStatsInView(event: any) {
    this.statistics.forEach(stat => {
      const element = document.getElementById(stat.title);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight && !stat.numberToShow) {
          this.startNumberIncrement(stat);
        }
      }
    });
  }

  startNumberIncrement(stat: any) {
    const targetNumber = stat.number;
    const incrementStep = Math.ceil(targetNumber / 100);
    let currentNumber = 0;

    const interval = setInterval(() => {
      currentNumber += incrementStep;
      if (currentNumber >= targetNumber) {
        clearInterval(interval);
        currentNumber = targetNumber;
      }
      stat.numberToShow = currentNumber.toLocaleString();
    }, 20);
  }
}
