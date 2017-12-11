import {Postagem} from "./postagem"

export class Usuario {
  nome: string;
  login: string;
  email: string;
  senha: string;
  idade: number;
  dataNascimento: Date;
  postagens: Postagem[] = [];
}
