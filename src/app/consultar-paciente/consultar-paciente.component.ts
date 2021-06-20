import {  Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PacienteService } from "../services/paciente.service";

@Component({
  selector: 'app-consultar-paciente',
  templateUrl: './consultar-paciente.component.html',
  styleUrls: ['./consultar-paciente.component.scss']
})
export class ConsultarPacienteComponent implements OnInit{

  data: any = [];

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
  ) { }

    ngOnInit() {
      this.getPacientes();
    }


  getPacientes(){
    this.pacienteService.getPacientes()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        
      })
  }

  verDetalhes(user) {
    this.pacienteService.setUser(user);
    console.log(user);
    this.router.navigate([`detalhes-paciente/${user.id}`]);
  }
}