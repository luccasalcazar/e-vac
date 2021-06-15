import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const URL = 'https://evac-tcc.herokupp.com'

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

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
}