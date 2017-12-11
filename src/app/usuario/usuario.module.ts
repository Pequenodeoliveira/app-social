import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {UsuarioService} from '../shared/service/usuario.service';
import {AppSocialBaseMaterialModule} from '../shared/app-social-base-material/app-social-base-material.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { LogarUsuarioComponent } from './logar-usuario/logar-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    AppSocialBaseMaterialModule
  ],
  providers: [
    UsuarioService
  ],
  declarations: [CadastroUsuarioComponent, ListaUsuarioComponent, AtualizaUsuarioComponent, LogarUsuarioComponent]
})
export class UsuarioModule {
}
