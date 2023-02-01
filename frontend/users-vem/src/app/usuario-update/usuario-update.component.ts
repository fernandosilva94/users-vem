import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from './../usuario';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  formGroup!: FormGroup;
  usuario!: UsuarioModel;
  id!: number;

  constructor(private formBuilder: FormBuilder,
              private routerActivated: ActivatedRoute,
              private route: Router,
              private usuarioService: UsuarioService) {
                this.formGroup = this.formBuilder.group({
                  nome: [null],
                  email: [null],
                  senha: [null],
                  cartao: [null],
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
  }

  btnVoltar() {
    this.route.navigate(["usuario"]);
  };

}
