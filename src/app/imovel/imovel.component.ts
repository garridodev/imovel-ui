import { Component, Input, OnInit } from '@angular/core';
import { Imovel } from '../model/imovel';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelComponent implements OnInit {

  @Input() imovel!: Imovel;

  constructor() { }

  ngOnInit(): void {
  }

}
