import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../../produtos';
import { CurrencyPipe, NgFor } from '@angular/common';
import { ProdutosComponent } from '../produtos.component';


@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [NgFor, CurrencyPipe, ProdutosComponent],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent  {

  produtos: IProduto[] = produtos;

}
