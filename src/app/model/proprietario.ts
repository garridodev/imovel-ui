export class Proprietario {
  
  public id: number;
  public imovelId: number;
  public nome: string;

  constructor(id: number, nome: string, imovelId: number) {
    this.id = id;
    this.nome = nome;
    this.imovelId = imovelId;    
  }

}