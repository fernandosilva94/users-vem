import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from './../services/usuario.service';
import { UsuarioModel } from './../usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css'],
})
export class CreateUsuarioComponent implements OnInit {
  // usuario!: UsuarioModel;
  formGroup: FormGroup;
  hide = true;
  @Output() recebeUserId: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {
    this.formGroup = this.formBuilder.group({
      nome: [null],
      email: [null],
      senha: [null],
      cartao: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formGroup.value);
    this.usuarioService.addUsuario(this.formGroup.value).subscribe({
      next: () => alert("Usuario cadastrado com sucesso."),

      error: () => {
        console.log("entrou no erro");
        alert("Erro de requisição 400");
      },
    });
    this.router.navigate(['usuario']);
  }

  AddCartao() {
    this.router.navigate(['create-cartao']);
  }

  btnVoltar() {
    this.router.navigate(['usuario']);
  }
  onError() {
  }
}
