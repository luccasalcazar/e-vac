import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dados-vacinacao',
  templateUrl: './dados-vacinacao.component.html',
  styleUrls: ['./dados-vacinacao.component.scss']
})

export class DadosVacinacaoComponent {

  constructor(
    private router: Router
  ) { }

  redirecionar() {
    this.router.navigate(['home'])
  }
}