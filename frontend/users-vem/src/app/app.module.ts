import { CartaoService } from './services/cartao.service';
import { UsuarioService } from './services/usuario.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CartaoComponent,
    CreateUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UsuarioService, CartaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
