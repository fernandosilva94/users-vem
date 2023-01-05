package com.urbanape.usersvem.services;

import java.util.List;
import java.util.Optional;

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

    public List<CartaoModel> findAll() {
        return cartaoRepository.findAll();
    }

    public Optional<CartaoModel> findById(Integer id) {
        return cartaoRepository.findById(id);
    }

    @Transactional
    public void deleteCartao(CartaoModel cartaoModel) {
        cartaoRepository.delete(cartaoModel);
    }

}
