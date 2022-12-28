package com.urbanape.usersvem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.urbanape.usersvem.model.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {
}
