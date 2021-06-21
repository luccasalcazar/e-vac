import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VacinaService } from "../services/vacina.service";

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit{

  data: any = [];

  constructor(
    private vacinaService: VacinaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMarcasVacina();
  }

  getMarcasVacina() {
    this.vacinaService.getMarcasVacinas()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        
      }
    )}

  verDetalhes(vacina) {
    this.vacinaService.setVacina(vacina);
    console.log(vacina);
    this.router.navigate([`consultar-vacinas/${vacina.id}`]);
    localStorage.setItem('idVacina', vacina.id);
  }
}