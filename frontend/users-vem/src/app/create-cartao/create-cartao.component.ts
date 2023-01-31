import { CartaoService } from './../services/cartao.service';
import { CartaoModel } from './../cartao';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioModel } from './../usuario';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-cartao',
  templateUrl: './create-cartao.component.html',
  styleUrls: ['./create-cartao.component.css']
})
export class CreateCartaoComponent implements OnInit {

  formGroup!: FormGroup;
  usuario!: UsuarioModel;
  cartao!: CartaoModel;
  id!: number;

  constructor(private usuarioService: UsuarioService,
              private cartaoService: CartaoService,
              private routerActivated: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.formGroup = this.formBuilder.group({
                  numeroCartao: [null],
                  nome: [null],
                  status: [null],
                  tipoCartao: [null],
                  usuarioId: [null]
                });
               }

  ngOnInit(): void {
    this.id = this.routerActivated.snapshot.params["id"];
    this.usuarioService.getUsuarioById(this.id).subscribe({
      next: (data) => this.usuario = data,

      error: () => {
        console.log("entrou no erro");
        alert("Erro de requisição 400");
      },
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
    this.formBuilder.control
    // this.cartaoService.addCartao(this.formGroup.value).subscribe({
    //   next: () => alert("Cartao cadastrado com sucesso."),

    //   error: () => {
    //     console.log("entrou no erro");
    //     alert("Erro de requisição 400");
    //   },
    // });
    // this.router.navigate(["usuario"]);
  }

  onInfoName() {

  }

  btnVoltar() {
    this.router.navigate(["usuario"]);
  };
}
