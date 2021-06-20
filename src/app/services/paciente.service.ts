import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

const URL = 'https://evac-tcc.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  usuario = new BehaviorSubject<any>('');

  constructor(
    private http: HttpClient
  ) { }

  cadastrarPaciente(obj) {
    return this.http
      .post(
        URL + '/patients/sendPatient',
        obj
      )
  }

  getPacientes() {
    return this.http
      .get(
        URL + '/patients/all/0'
      )
  }

  getPaciente(id) {
    return this.http
      .get(
        URL + '/patients/' + id
      )
  }

  setUser(user) {
    this.usuario.next(user);
  }
}