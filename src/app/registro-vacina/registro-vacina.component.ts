import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro-vacina',
  templateUrl: './registro-vacina.component.html',
  styleUrls: ['./registro-vacina.component.scss']
})
export class RegistroVacinaComponent implements OnInit{

  registrarVacinaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registrarVacinaForm = this.formBuilder.group({
      marcaVacina: ['', Validators.required],
      dataVacinacao: ['', Validators.required],
      nomeFuncionario: ['', Validators.required],
    });
  }


  redirecionar() {
    this.router.navigate(['home'])
  }
}