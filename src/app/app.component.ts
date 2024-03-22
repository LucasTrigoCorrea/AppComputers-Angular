import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ContatoComponent } from './contato/contato.component';
import { BarraDePesquisaComponent } from './barra-de-pesquisa/barra-de-pesquisa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AppRoutingModule, ProdutosComponent, DetalhesProdutoComponent, ContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proway-computers';
}
