import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { TwitterService } from "../services/twitter.service";

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  enviarTweetForm: FormGroup

  constructor(
    private twitterService: TwitterService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.enviarTweetForm = this.formBuilder.group({
      cep: ['', Validators.required],
      number: ['', Validators.required],
      quantityVaccinesRemaining: ['', Validators.required],
    });
  }

  enviarTweet() {
    let obj = this.enviarTweetForm.getRawValue();
    this.twitterService.mandarTweet(obj)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Comunicado enviado com sucesso',
          confirmButtonText: 'OK'
        }).then(res => {
          this.router.navigate(['home'])
        })
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Ocorreu um erro, tente novamente',
          confirmButtonText: 'OK'
        })
      });
  }
}