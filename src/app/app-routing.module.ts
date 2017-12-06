import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';
import {ListaUsuarioComponent} from './usuario/lista-usuario/lista-usuario.component';
import {AtualizaUsuarioComponent} from './usuario/atualiza-usuario/atualiza-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'usuario/cadastro',
        component: CadastroUsuarioComponent
      },
      {
        path: 'usuario/atualiza',
        component: AtualizaUsuarioComponent
      },
      {
        path: 'usuario/lista',
        component: ListaUsuarioComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
