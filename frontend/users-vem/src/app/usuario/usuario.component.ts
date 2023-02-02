import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from '../usuario';
import { UsuarioService } from './../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios!: UsuarioModel[];
  id!: number;
  @Output() infosUser = new EventEmitter(false);

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

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

  onEdit(id: number) {
    this.router.navigate(["update-usuario", id]);
  }

  onCreateCard(id: number) {
    this.router.navigate(["create-cartao", id]);
  };

  onDelete(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe({
      next: () => console.log("OK"),

      error: (data) => {
        console.log("Error: ", data);
      }
    });
    this.getUsuario();
    location.reload();
  }
}
