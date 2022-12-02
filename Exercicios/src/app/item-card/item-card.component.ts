import { Component } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  personagem: any = {
    nome: 'Sam Gardner',
    imagem: 'https://br.web.img3.acsta.net/c_162_216/pictures/18/01/05/14/41/2809300.jpg?    ims=704x264',
    nomeAtor: 'Keir Gilchrist',
    descricao:
      'Em Atypical, Sam Gardner (Keir Gilchrist) é um jovem autista de 18 anos que está em busca de sua própria independência – começando por arrumar uma namorada.',
  };
}
