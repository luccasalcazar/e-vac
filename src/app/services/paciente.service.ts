import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const URL = 'https://evac-tcc.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

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
}