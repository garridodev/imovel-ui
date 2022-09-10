export class Endereco {

  public id: number;
  public rua: string;
  public numero: number;
  public bairro: string;
  public cidade: string;
  public uf: string;
  public cep: string;

  constructor(id: number, rua: string, numero: number, bairro: string, cidade: string, uf: string, cep: string,) {
    this.id = id;
    this.rua = rua;
    this.numero = numero;    
    this.bairro = bairro;    
    this.cidade = cidade;    
    this.uf = uf;
    this.cep = cep;
  }
}