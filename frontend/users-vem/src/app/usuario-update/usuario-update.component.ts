import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../services/usuario.service';
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
                });
              }

  ngOnInit(): void {
    this.id = this.routerActivated.snapshot.params["id"];
    this.usuarioService.getUsuarioById(this.id).subscribe({
      next: (data) => this.usuario = data,

      error: (data) => {
        console.log("Error: ", data);
        alert("Confira os dados e tente novamente.");
      },
    });
  }

  onSubmit() {
    this.usuarioService.updateUsuario(this.usuario).subscribe({
      next: () => alert("Usuario atualizado!"),

      error: (data) => {
        console.log("entrou no erro: ", data);
      }
    });
    this.btnVoltar()
  }

  btnVoltar() {
    this.route.navigate(["usuario"]);
  };

}
