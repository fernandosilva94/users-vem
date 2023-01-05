package com.urbanape.usersvem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanape.usersvem.dtos.CartaoDto;
import com.urbanape.usersvem.model.CartaoModel;
import com.urbanape.usersvem.services.CartaoService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/cartao")
public class CartaoController {

    final CartaoService cartaoService;

    public CartaoController(CartaoService cartaoService) {
        this.cartaoService = cartaoService;
    }

    @PostMapping
    public ResponseEntity<Object> salvarCartao(@RequestBody @Valid CartaoDto cartaoDto) {
        var cartaoModel = new CartaoModel();
        BeanUtils.copyProperties(cartaoDto, cartaoModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(cartaoService.save(cartaoModel));
    }

    @GetMapping
    public ResponseEntity<List<CartaoModel>> getAllCartao() {
        return ResponseEntity.status(HttpStatus.OK).body(cartaoService.findAll());
    }

    @GetMapping("/{id}")
        public ResponseEntity<Object> getOneUsuario(@PathVariable(value = "id") Integer id) {
            Optional<CartaoModel> cartaoModelOptional = cartaoService.findById(id);
            if (!cartaoModelOptional.isPresent()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cartão não encontrado, verifique o ID.");
            }

            return ResponseEntity.status(HttpStatus.OK).body(cartaoModelOptional.get());
        }
}
