import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent implements OnInit {
  
  cadastrarFuncionarioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.cadastrarFuncionarioForm = this.formBuilder.group({
      emailFuncionario: ['', Validators.required],
      nomeFuncionario: ['', Validators.required],
      telefoneFuncionario: ['', Validators.required],
      passwordFuncionario: ['', Validators.required]
    });
  }

  redirecionar() {
    this.router.navigate(['home'])
  }
}