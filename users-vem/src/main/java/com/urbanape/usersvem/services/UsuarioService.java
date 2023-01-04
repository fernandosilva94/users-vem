package com.urbanape.usersvem.services;

import java.util.List;
import java.util.Optional;

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

    public List<UsuarioModel> findAll() {
        return usuarioRepository.findAll();
    }

    public Optional<UsuarioModel> findById(Integer id) {
        return usuarioRepository.findById(id);
    }

    @Transactional
    public void deleteUsuario(UsuarioModel usuarioModel) {
        usuarioRepository.delete(usuarioModel);
    }
}
