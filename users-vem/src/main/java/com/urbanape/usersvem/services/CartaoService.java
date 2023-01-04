package com.urbanape.usersvem.services;

import org.springframework.stereotype.Service;

import com.urbanape.usersvem.model.CartaoModel;
import com.urbanape.usersvem.repository.CartaoRepository;

import jakarta.transaction.Transactional;

@Service
public class CartaoService {
    final CartaoRepository cartaoRepository;

    public CartaoService(CartaoRepository cartaoRepository) {
        this.cartaoRepository = cartaoRepository;
    }

    @Transactional
    public CartaoModel save(CartaoModel cartaoModel) {
        return cartaoRepository.save(cartaoModel);
    }
}
