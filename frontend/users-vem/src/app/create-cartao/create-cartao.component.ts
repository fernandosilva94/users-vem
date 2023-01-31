import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioModel } from './../usuario';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-cartao',
  templateUrl: './create-cartao.component.html',
  styleUrls: ['./create-cartao.component.css']
})
export class CreateCartaoComponent implements OnInit {

  formGroup!: FormGroup;
  usuario!: UsuarioModel;
  id!: number;

  constructor(private usuarioService: UsuarioService,
              private routerActivated: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
                // this.formGroup = this.formBuilder.group({
                //   nome: [this.usuario.nome],
                //   id: [this.usuario.id]
                // });
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

  onSubmit() {}

  onInfoName() {

  }

  btnVoltar() {
    this.router.navigate(["usuario"]);
  };
}
