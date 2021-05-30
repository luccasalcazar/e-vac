import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroVacinaComponent } from './registro-vacina/registro-vacina.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ConsultarPacienteComponent } from './consultar-paciente/consultar-paciente.component';
import { DadosVacinacaoComponent } from './dados-vacinacao/dados-vacinacao.component';
import { ConsultarVacinasComponent } from './consultar-vacinas/consultar-vacinas.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    CadastroFuncionarioComponent,
    CadastroPacienteComponent,
    EstoqueComponent,
    RegistroVacinaComponent,
    ConsultarPacienteComponent,
    DadosVacinacaoComponent,
    ConsultarVacinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
