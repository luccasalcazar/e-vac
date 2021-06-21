import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.scss']
})
export class HeaderComponent implements OnInit{

    logado: boolean;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.verificarSessao();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['']);
    }

    verificarSessao() {
        if (this.authService.isLogged()) {
            this.logado = true;
        } else {
            this.logado = false;
        }
    }
}