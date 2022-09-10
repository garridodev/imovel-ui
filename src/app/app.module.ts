import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImovelComponent } from './imovel/imovel.component';
import { HomeComponent } from './paginas/home/home.component';
import { ComprarAlugarComponent } from './paginas/comprar-alugar/comprar-alugar.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ImovelComponent,
    HomeComponent,
    ComprarAlugarComponent,
    CadastrarComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
