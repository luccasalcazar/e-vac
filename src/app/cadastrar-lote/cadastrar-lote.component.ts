import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { VacinaService } from "../services/vacina.service";

@Component({
  selector: 'app-cadastrar-lote',
  templateUrl: './cadastrar-lote.component.html',
  styleUrls: ['./cadastrar-lote.component.scss']
})
export class CadastrarLoteComponent implements OnInit{

  cadastrarLoteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private vacinaService: VacinaService
  ) { }

  ngOnInit() {
    this.cadastrarLoteForm = this.formBuilder.group({
      quantity: ['', Validators.required]
    });
  }

  registrar() {
    let obj = this.cadastrarLoteForm.getRawValue();
    let id = localStorage.getItem('idVacina');
    this.vacinaService.cadastrarLote(obj, id)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Cadastro efetuado com sucesso',
          confirmButtonText: 'OK'
        }).then(res => {
          this.router.navigate(['estoque'])
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