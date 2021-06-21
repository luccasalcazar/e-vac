import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VacinaService } from "../services/vacina.service";

@Component({
  selector: 'app-consultar-vacinas',
  templateUrl: './consultar-vacinas.component.html',
  styleUrls: ['./consultar-vacinas.component.scss']
})

export class ConsultarVacinasComponent implements OnInit {
  
  id: number;
  data: any = [];
  idVacina: any;

  constructor(
    private vacinaService: VacinaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.vacinaService.getVacina(this.id).subscribe(
      res => {
        console.log(res);
        this.data = res;
      }
    )
  }

  redirecionar() {
    this.idVacina = localStorage.getItem('idVacina');
    let id = this.idVacina;
    console.log(this.idVacina);
    this.router.navigate([`cadastrar-lote/${id}`]);
  }
}