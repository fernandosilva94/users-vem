import { UsuarioModel } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {
  usuario!: UsuarioModel;
  formGroup: FormGroup;
  hide = true;


  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nome: [null],
      email: [null],
      senha: [null],
      cartao: [null],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {}
  AddCartao() {}
}
