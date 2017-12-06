import {Injectable} from '@angular/core';
import {Usuario} from '../model/usuario';

@Injectable()
export class UsuarioService {
  us: Usuario[] = [];
  u1 = new Usuario();
  u2 = new Usuario();

  constructor() {
      this.u1.nome = "David";
      this.u1.email = "davidfiel17@gmail.com";
      this.u1.senha = "1241232";
      this.us.push(this.u1);
      this.u2.nome = "Raphael Victor";
      this.u2.email = "raphinha@gmail.com";
      this.u2.senha = "dsad";
      this.us.push(this.u2);
  }

  cadastrarUsuario(usuario: Usuario) {
    this.us.push(usuario);
  }

  atUsuario(usuario: Usuario) {
    for (var i=0;i<this.us.length;i++){      
        if(this.us[i].nome==usuario.nome){
          this.us[i] = usuario;
      }
   }
  }

  rmUsuario(nome){
    for (var i=0;i<this.us.length;i++){      
        if(this.us[i].nome==nome){
          this.us[i].nome = "removido";
      }
   }

  }

  Usuarios(){
      var aux: Usuario[] = [];

      for (var i=0;i<this.us.length;i++){      
        if(this.us[i].nome!="removido"){
          aux.push(this.us[i]);
          }
       }

      return aux;
  }

}

