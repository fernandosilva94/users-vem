import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios!: UsuarioModel[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuario();
  };

  private getUsuario() {
    this.usuarioService.getUsuario().subscribe(data => {
      this.usuarios = data;
    });
  };

  onAdd() {
    this.router.navigate(["create-usuario"]);
  };
}
