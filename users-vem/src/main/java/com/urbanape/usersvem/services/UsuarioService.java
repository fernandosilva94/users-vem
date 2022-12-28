package com.urbanape.usersvem.services;

import org.springframework.stereotype.Service;

import com.urbanape.usersvem.repository.UsuarioRepository;

@Service
public class UsuarioService {

    final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
}
