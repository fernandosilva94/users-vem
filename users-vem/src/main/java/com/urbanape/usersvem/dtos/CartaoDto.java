package com.urbanape.usersvem.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CartaoDto {

    @NotBlank
    @Size(min = 10, max = 10)
    private Long numeroCartao;

    @NotBlank
    @Size(min=5)
    private String nome;

    @NotBlank
    private Boolean status;

    @NotBlank
    private String tipoCartao;
}
