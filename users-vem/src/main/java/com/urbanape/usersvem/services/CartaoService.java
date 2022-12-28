package com.urbanape.usersvem.services;

import org.springframework.stereotype.Service;

import com.urbanape.usersvem.repository.CartaoRepository;

@Service
public class CartaoService {
    final CartaoRepository cartaoRepository;

    public CartaoService(CartaoRepository cartaoRepository) {
        this.cartaoRepository = cartaoRepository;
    }
}
