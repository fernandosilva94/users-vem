package com.urbanape.usersvem.dtos;

import java.util.List;

import com.urbanape.usersvem.model.CartaoModel;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UsuarioDto {
    
    @NotBlank
    @Size(max = 500)
    private String nome;

    @NotBlank
    @Size(min = 10)
    private String email;

    @NotBlank
    @Size(min = 6)
    private String senha;

    private List<CartaoModel> cartao;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public List<CartaoModel> getCartao() {
        return cartao;
    }

    public void setCartao(List<CartaoModel> cartao) {
        this.cartao = cartao;
    }
}
