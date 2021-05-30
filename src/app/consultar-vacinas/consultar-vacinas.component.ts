import { Component } from "@angular/core";


interface Country {
  marca: string;
  quantidade: number;
  lote: string;
}

const COUNTRIES: Country[] = [
  {
    marca: 'Coronavac',
    quantidade: 1000000,
    lote: '05/05/1999',
  },
  {
    marca: 'Pfizer',
    quantidade: 500000,
    lote: '06/06/1999',
  },
  {
    marca: 'AstraZeneca',
    quantidade: 250000,
    lote: '07/07/1999'
  },
  {
    marca: 'Fiocruz',
    quantidade: 125000,
    lote: '08/08/1999'
  }
];

@Component({
  selector: 'app-consultar-vacinas',
  templateUrl: './consultar-vacinas.component.html',
  styleUrls: ['./consultar-vacinas.component.scss']
})

export class ConsultarVacinasComponent {
  
  countries = COUNTRIES;
}