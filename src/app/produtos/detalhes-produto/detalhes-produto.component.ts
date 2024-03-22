import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho, produtos} from '../../produtos';
import { CurrencyPipe, NgFor } from '@angular/common';
import { ProdutosComponent } from '../produtos.component';
import { ProdutosService } from '../../produtos.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoService } from '../../carrinho.service';


@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [ CurrencyPipe, ProdutosComponent, FormsModule, NgFor],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit  {
  produto: IProduto | undefined ;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }


  adicionarAoCarrinho(){
    this.notificacaoService.notificar(`O produto ${this.produto?.descricao} foi adicionado ao carrinho`);
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
  
}
