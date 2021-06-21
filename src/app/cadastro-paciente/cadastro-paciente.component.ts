import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { PacienteService } from "../services/paciente.service";
import { VacinaService } from "../services/vacina.service";

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit{

  cadastrarPacienteForm: FormGroup;
  obj = {};
  data: any = [];
  localStorage: any
  idFuncionario: any;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pacienteService: PacienteService,
    private vacinaService: VacinaService
  ) { }
 
    ngOnInit() {
      this.getMarcasVacinas();
      this.cadastrarPacienteForm = this.formBuilder.group({
        email: ['', Validators.required],
        name: ['', Validators.required],
        tel: ['', Validators.required],
        cpf: ['', Validators.required],
        cep: ['', Validators.required],
        address: ['', Validators.required],
        number: ['', Validators.required],
        complemento: [''],
        marcaVacina: ['', Validators.required]
      });
    }

    getMarcasVacinas() {
      this.vacinaService.getMarcasVacinas()
        .subscribe(res => {
          this.data = res;
          console.log(this.data);
        })
    }

  registrar() {
      this.idFuncionario = localStorage.getItem('usuario');
      let obj = this.cadastrarPacienteForm.getRawValue();
      obj['idFuncionario'] = this.idFuncionario;
      this.idFuncionario = localStorage.getItem('')
      this.pacienteService.cadastrarPaciente(obj)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Cadastro efetuado com sucesso',
          confirmButtonText: 'OK'
        }).then(res => {
          this.router.navigate(['home'])
        })
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Erro no cadastro, tente novamente mais tarde',
          confirmButtonText: 'OK'
        })
      });
  }
}