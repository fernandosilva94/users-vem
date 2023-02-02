import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartaoService } from './services/cartao.service';
import { UsuarioService } from './services/usuario.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CreateCartaoComponent } from './create-cartao/create-cartao.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CartaoComponent,
    CreateUsuarioComponent,
    CreateCartaoComponent,
    UsuarioUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [UsuarioService, CartaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
