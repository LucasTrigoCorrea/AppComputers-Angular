import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { RouterLink } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NgFor, ProdutosComponent, CurrencyPipe, RouterLink, DetalhesProdutoComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: IProduto[] = produtos;
}
