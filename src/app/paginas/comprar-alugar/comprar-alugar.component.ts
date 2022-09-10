import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cep } from 'src/app/interface/cep';
import { Imovel } from 'src/app/model/imovel';
import { CepService } from 'src/app/service/cep.service';
import { ImovelService } from 'src/app/service/imovel.service';

@Component({
  selector: 'app-comprar-alugar',
  templateUrl: './comprar-alugar.component.html',
  styleUrls: ['./comprar-alugar.component.css']
})
export class ComprarAlugarComponent implements OnInit {

  public listaImoveis = new Array<Imovel>();
  public formFiltro!: FormGroup;
  public cep: Cep | undefined;

  constructor(
    private cepService: CepService,
    private imovelService: ImovelService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createFormFiltroCep();
    this.buscarTodosImoveis();
    // this.buscarCep("31840430");
  }

  private createFormFiltroCep(){
    this.formFiltro = this.formBuilder.group({
      cep: [null]
    })
  }

  private buscarCep(cep: string) {
    this.cepService.buscarCep(cep)
      .subscribe((retorno) => {
        this.cep = retorno;
        console.log(this.cep?.localidade)
      })
  }

  public buscarTodosImoveis() {
    this.formFiltro.controls['cep'].setValue(null);
    this.imovelService.buscarTodosImoveis()
      .subscribe((retorno) => {        
        this.listaImoveis = retorno;
      })
  }

  public buscarImovelPorCep() {
    let cepInformado = this.formFiltro.controls['cep'].value;
    this.imovelService.buscarImovelPorCep(cepInformado)
      .subscribe((retorno) => {
        this.buscarCep(cepInformado);
        this.listaImoveis = retorno;
      })
  }

}
