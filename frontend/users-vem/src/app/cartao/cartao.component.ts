import { CartaoService } from './../services/cartao.service';
import { CartaoModel } from './../cartao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {
  cartoes!: CartaoModel[];

  constructor(private cartaoService: CartaoService) { }

  ngOnInit(): void {
    this.getCartao();
  };

  private getCartao() {
    this.cartaoService.getCartao().subscribe(data => {
      this.cartoes = data;
    });
  };
};
