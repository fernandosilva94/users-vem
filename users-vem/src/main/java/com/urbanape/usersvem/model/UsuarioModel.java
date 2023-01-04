package com.urbanape.usersvem.model;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_usuario")
public class UsuarioModel implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false, length = 500)
    private String nome;

    @Column(nullable = false, length = 500, unique = true)
    private String email;

    @Column(nullable = false, length = 200)
    private String senha;

    @OneToMany(mappedBy="usuario")
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
