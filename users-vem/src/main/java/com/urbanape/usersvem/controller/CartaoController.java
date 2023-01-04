package com.urbanape.usersvem.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
}
