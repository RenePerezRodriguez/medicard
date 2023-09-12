import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.scss']
})
export class DescuentosComponent implements OnInit {

  ngOnInit(): void {
    const modalLinks = document.querySelectorAll(".modal-link");

    modalLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const pdfUrl = link.getAttribute("href");

        if (pdfUrl) {
          const modal = window.open(pdfUrl, "pdfWindow", "width=800,height=600");
          modal?.focus();
        }
      });
    });
  }

  // Resto del código del componente
}
