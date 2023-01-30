import { Component, OnInit } from '@angular/core';
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
  usuario!: UsuarioModel;
  formGroup: FormGroup;
  hide = true;

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
    // this.usuarioService.addUsuario(this.formGroup.value).subscribe(data => {
    //   console.log(data);
    // });
    this.usuarioService.addUsuario(this.formGroup.value).subscribe({
      next: () => /*console.log(data)*/this.snackBar.open("Usuario cadastrado com sucesso.", "X"),
      error: () => {
        // this.onError();
        console.log("entrou no erro");
        this.snackBar.open("Erro ao cadastrar usuário.", "X");
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
