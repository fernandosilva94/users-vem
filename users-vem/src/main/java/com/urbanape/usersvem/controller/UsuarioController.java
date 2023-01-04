package com.urbanape.usersvem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanape.usersvem.dtos.UsuarioDto;
import com.urbanape.usersvem.model.UsuarioModel;
import com.urbanape.usersvem.services.UsuarioService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/usuario")
public class UsuarioController {
    
    final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public ResponseEntity<Object> salvarUsuario(@RequestBody @Valid UsuarioDto usuarioDto) {
        var usuarioModel = new UsuarioModel();
        BeanUtils.copyProperties(usuarioDto, usuarioModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.save(usuarioModel));
    }

    @GetMapping
        public ResponseEntity<List<UsuarioModel>> getAllUsuario() {
            return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findAll());
        }

    @GetMapping("/{id}")
        public ResponseEntity<Object> getOneUsuario(@PathVariable(value = "id") Integer id) {
            Optional<UsuarioModel> usuarioModelOptional = usuarioService.findById(id);
            if (!usuarioModelOptional.isPresent()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado, verifique o ID.");
            }

            return ResponseEntity.status(HttpStatus.OK).body(usuarioModelOptional.get());
        }

     @DeleteMapping("/{id}")
        public ResponseEntity<Object> deleteUsuario(@PathVariable(value = "id") Integer id) {
            Optional<UsuarioModel> usuarioModelOptional = usuarioService.findById(id);
            if (!usuarioModelOptional.isPresent()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado, verifique o ID.");
            }
            usuarioService.deleteUsuario(usuarioModelOptional.get());
            return ResponseEntity.status(HttpStatus.OK).body("Usuario deletado com sucesso.");
        }
}
