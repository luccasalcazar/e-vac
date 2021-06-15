import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const URL = 'http://evac-tcc.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor (
    private http: HttpClient
  ) { }

  cadastrarFuncionario(obj) {
    return this.http
      .post(
        URL + '/users/cadastro',
        obj
      )
  }
}