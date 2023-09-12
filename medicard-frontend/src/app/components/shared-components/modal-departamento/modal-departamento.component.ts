import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

interface Departamento {
  nombre: string;
  bandera: string;
}

@Component({
  selector: 'app-modal-departamento',
  templateUrl: './modal-departamento.component.html',
  styleUrls: ['./modal-departamento.component.scss']
})
export class ModalDepartamentoComponent {
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  selectedDepartamento: string = '';
  departamentos: Departamento[] = [
    /* Datos de los departamentos */
    { nombre: 'Chuquisaca', bandera: 'https://ejemplo.com/bandera_chuquisaca.png' },
    { nombre: 'La Paz', bandera: 'https://ejemplo.com/bandera_la_paz.png' },
    { nombre: 'Cochabamba', bandera: 'https://ejemplo.com/bandera_cochabamba.png' },
    { nombre: 'Oruro', bandera: 'https://ejemplo.com/bandera_oruro.png' },
    { nombre: 'Potosí', bandera: 'https://ejemplo.com/bandera_potosi.png' },
    { nombre: 'Tarija', bandera: 'https://ejemplo.com/bandera_tarija.png' },
    { nombre: 'Santa Cruz', bandera: 'https://ejemplo.com/bandera_santa_cruz.png' },
    { nombre: 'Beni', bandera: 'https://ejemplo.com/bandera_beni.png' },
    { nombre: 'Pando', bandera: 'https://ejemplo.com/bandera_pando.png' }
  ];

  constructor(private router: Router) {}
  onSelectDepartamento(event: any) {
    this.selectedDepartamento = event.target.value;

    if (this.selectedDepartamento === 'Cochabamba') {
      this.router.navigate(['home-cochabamba']);
    }
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}

