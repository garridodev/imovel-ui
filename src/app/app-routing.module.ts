import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { ComprarAlugarComponent } from './paginas/comprar-alugar/comprar-alugar.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comprar-alugar', component: ComprarAlugarComponent },
  { path: 'cadastrar', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
