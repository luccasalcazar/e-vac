import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-consultar-paciente',
  templateUrl: './consultar-paciente.component.html',
  styleUrls: ['./consultar-paciente.component.scss']
})
export class ConsultarPacienteComponent {
  
  constructor(
    private router: Router
  ) { }

  redirecionar() {
    this.router.navigate(['dados-vacinacao'])
  }
}
