package com.urbanape.usersvem.services;

import org.springframework.stereotype.Service;

import com.urbanape.usersvem.model.UsuarioModel;
import com.urbanape.usersvem.repository.UsuarioRepository;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService {

    final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Transactional
    public UsuarioModel save(UsuarioModel usuarioModel) {
        return usuarioRepository.save(usuarioModel);
    }
}
