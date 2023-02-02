import { UsuarioService } from './../services/usuario.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioModel } from '../usuario';
import { Router, ActivatedRoute } from '@angular/router';

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
              private router: Router,
              private routerActivated: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsuario();

    // this.usuarioService.getUsuarioById(this.id).subscribe({
    //   next: () => console.log("OK"),

    //   error: () => {
    //     console.log("entrou no erro");
    //     // alert("Erro de requisição 400");
    //   },
    // });
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

  onInfo(id: number) {
    this.router.navigate(["usuario-info", id]);
  }

  onDelete(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe({
      next: () => console.log("OK"),

      error: (data) => {
        console.log("entrou no erro: ", data);
      }
    });
    this.getUsuario();
    location.reload();
  }

  numList() {

  }
}
