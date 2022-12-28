package com.urbanape.usersvem.model;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name = "tb_cartao")
public class CartaoModel  {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "numero_cartao", nullable = false, unique = true, length = 10)
    private Long numeroCartao;

    @Column(nullable = false, length = 200)
    private String nome;

    @Column
    private Boolean status;

    @NotNull
    @Length(max = 10)
    @Pattern(regexp = "COMUM|ESTUDANTE|TRABALHADOR")
    @Column(length = 10, nullable = false)
    private String tipoCartao;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private UsuarioModel usuario;

    public Long getNumeroCartao() {
        return numeroCartao;
    }

    public void setNumeroCartao(Long numeroCartao) {
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
