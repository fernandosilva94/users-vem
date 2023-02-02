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
  id!: number;

  constructor(private cartaoService: CartaoService) { }

  ngOnInit(): void {
    this.getCartao();
  };

  private getCartao() {
    this.cartaoService.getCartao().subscribe(data => {
      this.cartoes = data;
    });
  };

  onDelete(id: number) {
    this.cartaoService.deleteCartao(id).subscribe({
      next: () => console.log("OK"),

      error: (data) => {
        console.log("entrou no erro: ", data);
      }
    });
    location.reload()
    this.getCartao();
  }
};
