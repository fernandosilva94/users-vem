import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartaoModel } from './../cartao';
import { CartaoService } from './../services/cartao.service';
import { UsuarioService } from './../services/usuario.service';
import { UsuarioModel } from './../usuario';

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
                  usuario: this.formBuilder.group({
                    id: [null]
                  })
                });
               }

  ngOnInit(): void {
    this.id = this.routerActivated.snapshot.params["id"];
    this.usuarioService.getUsuarioById(this.id).subscribe({
      next: (data) => this.usuario = data,

      error: () => {
        console.log("entrou no erro");
      },
    });
  }

  onSubmit() {
    console.log({...this.formGroup.value, usuario: ({ id: this.id })});
    this.cartaoService.addCartao({...this.formGroup.value, usuario: ({ id: this.id })}).subscribe({
      next: () => alert("Cartao cadastrado com sucesso."),

      error: (data) => {
        console.log("Erro:", data);
        alert("Erro na criação do Cartão, verifique os dados.");
      },
    });
    this.router.navigate(["usuario"]);
  }

  btnVoltar() {
    this.router.navigate(["usuario"]);
  };

  altLabel() {
    var status = this.formGroup.controls['status'].value;
    if (status == true) {
      return "Ativo"
    } else {
      return "Inativo"
    }
  }
}
