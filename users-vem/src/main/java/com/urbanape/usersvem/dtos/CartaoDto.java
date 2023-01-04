package com.urbanape.usersvem.dtos;

import com.urbanape.usersvem.model.UsuarioModel;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CartaoDto {

    private Integer numeroCartao;

    @NotBlank
    @Size(min=5)
    private String nome;

    private Boolean status;

    private String tipoCartao;

    private UsuarioModel usuario;

    public Integer getNumeroCartao() {
        return numeroCartao;
    }

    public void setNumeroCartao(Integer numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getTipoCartao() {
        return tipoCartao;
    }

    public void setTipoCartao(String tipoCartao) {
        this.tipoCartao = tipoCartao;
    }

    public UsuarioModel getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioModel usuario) {
        this.usuario = usuario;
    }
    
}
