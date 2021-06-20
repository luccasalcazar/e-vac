import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FuncionarioService } from "../services/funcionario.service";

@Component({
  selector: 'app-consultar-funcionario',
  templateUrl: './consultar-funcionario.component.html',
  styleUrls: ['./consultar-funcionario.component.scss']
})
export class ConsultarFuncionarioComponent implements OnInit{

  data: any = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.funcionarioService.getFuncionarios()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      })
  }

}