import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const URL = 'https://evac-tcc.herokuapp.com'

@Injectable({ 
  providedIn: 'root' 
})
export class TwitterService {

  constructor(
    private http: HttpClient
  ) { }

  mandarTweet(obj) {
    return this.http
      .post(
        URL + '/twitter/tweet',
        obj
      )
  }
}