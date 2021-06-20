import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PacienteService } from "../services/paciente.service";

@Component({
  selector: 'app-consultar-paciente',
  templateUrl: './detalhes-paciente.component.html',
  styleUrls: ['./detalhes-paciente.component.scss']
})
export class DetalhesPacienteComponent implements OnInit{
  
  id: number;
  data = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.pacienteService.getPaciente(this.id).subscribe(
      res => {
        console.log(res);
        this.data = res;
      }
    )
    
  }

  redirecionar() {
    this.router.navigate(['dados-vacinacao'])
  }
}
