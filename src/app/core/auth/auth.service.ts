import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

const URL = 'https://evac-tcc.herokuapp.com'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  
  authenticate(email: string, password: string) {
    return this.http
      .post(
        URL + '/users/auth', 
        { email, password },
        { observe: 'response'} 
      )
      .pipe(tap(res => {
        const authToken = res['body']['token'];
        const id = res['body']['id']
        this.tokenService.setToken(authToken);
        this.tokenService.setId(id);

      }));
  }

  logout() {
    this.tokenService.removeToken();
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}
