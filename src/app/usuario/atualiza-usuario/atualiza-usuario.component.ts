import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/service/usuario.service';

@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrls: ['./atualiza-usuario.component.css']
})
export class AtualizaUsuarioComponent implements OnInit {
   usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  atUsuario() {
    this.usuarioService.atUsuario(this.usuario);
    this.usuario = new Usuario();
  }

}
