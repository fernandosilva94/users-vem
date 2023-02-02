import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from './../services/usuario.service';
@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css'],
})
export class CreateUsuarioComponent implements OnInit {
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
    this.usuarioService.addUsuario(this.formGroup.value).subscribe({
      next: () => alert("Usuario cadastrado com sucesso."),

      error: (data) => {
        console.log("erro", data);
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
