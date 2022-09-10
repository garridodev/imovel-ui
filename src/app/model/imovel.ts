import { Endereco } from "./endereço";
import { Proprietario } from "./proprietario";

export class Imovel {
  
  public id: number;
  public nome: string;
  public tipo: string;
  public valor: number;
  public condominio: number;
  public quartos: number;
  public banheiros: number;
  public mobiliado: boolean;
  public area: number;
  public venda: boolean;
  public aluguel: boolean;
  public dataAnuncio: Date;
  public imagem: string;
  public endereco: Endereco;
  public proprietario: Proprietario;

  constructor(id: number, nome: string, tipo: string, valor: number, condominio: number, quartos: number, banheiros: number, mobiliado: boolean, area: number, venda: boolean, aluguel: boolean, dataAnuncio: Date, imagem: string, endereco: Endereco, proprietario: Proprietario) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.valor = valor;
    this.condominio = condominio;
    this.quartos = quartos;
    this.banheiros = banheiros;
    this.mobiliado = mobiliado;
    this.area = area;
    this.venda = venda;
    this.aluguel = aluguel;
    this.dataAnuncio = dataAnuncio;
    this.imagem = imagem;
    this.endereco = endereco;
    this.proprietario = proprietario;
  }

}