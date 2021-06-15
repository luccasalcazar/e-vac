import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { ConsultarPacienteComponent } from './consultar-paciente/consultar-paciente.component';
import { ConsultarVacinasComponent } from './consultar-vacinas/consultar-vacinas.component';
import { AuthGuard } from './core/auth/auth.guard';
import { DadosVacinacaoComponent } from './dados-vacinacao/dados-vacinacao.component';
import { EstoqueComponent } from './estoque/estoque.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroVacinaComponent } from './registro-vacina/registro-vacina.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cadastro-funcionario',
    component: CadastroFuncionarioComponent
  },
  {
    path: 'cadastro-paciente',
    component: CadastroPacienteComponent
  },
  {
    path: 'estoque',
    component: EstoqueComponent
  },
  {
    path: 'registro-vacina',
    component: RegistroVacinaComponent
  },
  {
    path: 'consultar-paciente',
    component: ConsultarPacienteComponent
  },
  {
    path: 'dados-vacinacao',
    component: DadosVacinacaoComponent
  },
  {
    path: 'consultar-vacinas',
    component: ConsultarVacinasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
