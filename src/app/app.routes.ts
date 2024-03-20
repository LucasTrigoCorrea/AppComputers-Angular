import { Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';

export const routes: Routes = [
    {path: "produtos", loadComponent:() => import('./produtos/produtos.component').then(c => c.ProdutosComponent)},
    {path: "", redirectTo: "produtos", pathMatch: "full"},
    {path: "produtos/:id", component: DetalhesProdutoComponent},
    {path: "**", component: NaoEncontradoComponent},
];
