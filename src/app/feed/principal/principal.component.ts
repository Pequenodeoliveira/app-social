import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {Postagem} from '../../shared/model/postagem';
import {UsuarioService} from '../../shared/service/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  p: Postagem = new Postagem();
  u: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { 
      this.atualizarUsuario();
  }

  ngOnInit() {
  }

  atualizarUsuario(){
    var usuarios = this.usuarioService.Usuarios();

    this.u = usuarios[0];
  }

  postar(){
      this.usuarioService.Postar(this.u, this.p);

      this.p = new Postagem();

      this.atualizarUsuario();
  }

}
