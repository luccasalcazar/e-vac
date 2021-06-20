import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

const URL = 'https://evac-tcc.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  usuario = new BehaviorSubject<any>('');

  constructor(
    private http: HttpClient
  ) { }

  cadastrarVacina(obj) {
    return this.http
      .post(
        URL + 'vaccines/new',
        obj
      )
  }

  getMarcasVacinas() {
    return this.http
      .get(
        URL + '/vaccines/names'
      )
  }

  getVacina(id) {
    return this.http
      .get(
        URL + '/vaccines/used/' + id
      )
  }

  setVacina(vacina) {
    this.usuario.next(vacina);
  }
}