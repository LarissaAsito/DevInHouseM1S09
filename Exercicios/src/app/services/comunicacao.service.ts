import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {

  constructor() { }
  login: any;

  cadastrar(email: string, senha: string){
    this.login = {
      email: email,
      senha: senha
    };
    localStorage.setItem(email, JSON.stringify(this.login));
  }
}
