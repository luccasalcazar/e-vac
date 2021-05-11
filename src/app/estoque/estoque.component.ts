import { Component } from "@angular/core";

interface Country {
  marca: string;
  quantidade: number;
}

const COUNTRIES: Country[] = [
  {
    marca: 'Coronavac',
    quantidade: 1000000,
  },
  {
    marca: 'Pfizer',
    quantidade: 500000,
  },
  {
    marca: 'AstraZeneca',
    quantidade: 250000,
  },
  {
    marca: 'Fiocruz',
    quantidade: 125000,
  }
];

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent {

  countries = COUNTRIES;
  
}