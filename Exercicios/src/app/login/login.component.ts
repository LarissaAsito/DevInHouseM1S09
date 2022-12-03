import { Component, OnInit } from '@angular/core';
import { ComunicacaoService } from 'src/app/services/comunicacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = "";
  senha: string = "";

  constructor(public comunicService: ComunicacaoService){

  }

  ngOnInit(): void {
    
  }

}
