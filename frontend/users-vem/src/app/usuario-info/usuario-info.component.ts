import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from '../usuario';

@Component({
  selector: 'app-usuario-info',
  templateUrl: './usuario-info.component.html',
  styleUrls: ['./usuario-info.component.css']
})
export class UsuarioInfoComponent implements OnInit {

  formGroup!: FormGroup;
  usuario!: UsuarioModel;
  id!: number;

  constructor(private formBuilder: FormBuilder,
              private routerActivated: ActivatedRoute,
              private usuarioService: UsuarioService,
              private route: Router) {
    this.formGroup = this.formBuilder.group({
      nome: [null],
      email: [null],
    });
  }

  ngOnInit(): void {
    this.id = this.routerActivated.snapshot.params["id"];
    this.usuarioService.getUsuarioById(this.id).subscribe({
      next: (data) => this.usuario = data,

      error: () => {
        console.log("entrou no erro");
        alert("Erro de requisição");
      },
    });
  }

  btnVoltar() {
    this.route.navigate(["usuario"]);
  }

}
