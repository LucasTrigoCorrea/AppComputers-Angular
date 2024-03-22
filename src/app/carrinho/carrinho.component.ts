import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { FormControlName, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, CurrencyPipe, RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;
constructor(
  public carrinhoService: CarrinhoService,
  private router: Router
){}

ngOnInit(): void {
  this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  this.calcularTotal();
}

calcularTotal(){
  this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
}

removeProdutoCarrinho(produtoId: number){
  this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
  this.carrinhoService.removerProdutoCarrinho(produtoId);
  this.calcularTotal();
}

comprar(){
  alert("Parabéns! Você finalizou sua compra!");
  this.carrinhoService.limparCarrinho();
  this.router.navigate(["produtos"]);
}




}
