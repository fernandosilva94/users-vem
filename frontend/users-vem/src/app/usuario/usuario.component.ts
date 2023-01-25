import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios!: UsuarioModel[];

  constructor(private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  private getUsuario() {
    this.UsuarioService.getUsuario().subscribe(data => {
      this.usuarios = data;
    })
  }
}
