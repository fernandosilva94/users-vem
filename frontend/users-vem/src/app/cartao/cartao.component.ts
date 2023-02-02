import { Component, OnInit } from '@angular/core';
import { CartaoModel } from './../cartao';
import { CartaoService } from './../services/cartao.service';

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
        console.log("Error: ", data);
      }
    });
    location.reload()
    this.getCartao();
  }
};
