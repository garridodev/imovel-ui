import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cep } from 'src/app/interface/cep';
import { Imovel } from 'src/app/model/imovel';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  public formFiltro!: FormGroup;
  public cep: Cep | undefined;

  constructor(
    private cepService: CepService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public buscarCep() {
    this.cepService.buscarCep(this.formFiltro.controls['cep'].value)
      .subscribe((retorno) => {
        if(retorno) {
          this.formFiltro.get('endereco')?.get('rua')?.setValue(retorno.logradouro)
          this.formFiltro.get('endereco')?.get('bairro')?.setValue(retorno.bairro)
          this.formFiltro.get('endereco')?.get('cidade')?.setValue(retorno.localidade)
          this.formFiltro.get('endereco')?.get('uf')?.setValue(retorno.uf)
          this.formFiltro.get('endereco')?.get('cep')?.setValue(retorno.cep)
        }
      })
  }

  private createForm(){
    this.formFiltro = this.formBuilder.group({
      id: [null],
      nome: [null],
      tipo: [null],
      valor: [null],
      quartos: [null],
      banheiros: [null],
      area: [null],
      venda: [null],
      aluguel: [null],
      cep: [null],
      endereco: this.formBuilder.group({
        id: [null],
        rua: [null],
        numero: [null],
        bairro: [null],
        cidade: [null],
        uf: [null],
        cep: [null]
      })
    })
  }

}
