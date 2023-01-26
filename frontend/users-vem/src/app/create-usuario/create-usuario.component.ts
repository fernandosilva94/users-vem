import { UsuarioModel } from './../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {
  usuario!: UsuarioModel;

  constructor() { }

  ngOnInit(): void {
  }

}
