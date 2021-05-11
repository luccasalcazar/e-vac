import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit{

  cadastrarPacienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
 
    ngOnInit() {
      this.cadastrarPacienteForm = this.formBuilder.group({
        cpfPaciente: ['', Validators.required],
        emailPaciente: ['', Validators.required],
        nomePaciente: ['', Validators.required],
        telefonePaciente: ['', Validators.required],
      });
    }

  redirecionar() {
    this.router.navigate(['home'])
  }
}