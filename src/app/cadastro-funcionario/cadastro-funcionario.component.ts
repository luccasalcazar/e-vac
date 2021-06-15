import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { FuncionarioService } from "../services/funcionario.service";

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent implements OnInit {
  
  cadastrarFuncionarioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit() {
    this.cadastrarFuncionarioForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      tel: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registrar() {
    let obj = this.cadastrarFuncionarioForm.getRawValue();
    this.funcionarioService.cadastrarFuncionario(obj)
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