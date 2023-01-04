package com.urbanape.usersvem.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_cartao")
public class CartaoModel implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "numero_cartao", nullable = false, unique = true)
    private Integer numeroCartao;

    @Column(nullable = false, length = 200)
    private String nome;

    @Column
    private Boolean status;

    @Column(length = 10, nullable = false)
    private String tipoCartao;

    @JsonBackReference
    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "usuario_id")
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
