import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
   us: Usuario[];

   atualizarUsuarios(){
    this.us = this.usuarioService.Usuarios();
  }

  constructor(private usuarioService: UsuarioService) { 
      this.atualizarUsuarios();
  }

  ngOnInit() {
  }

  rmUsuario(nome){
    this.usuarioService.rmUsuario(nome);
    this.atualizarUsuarios();
  }
}
