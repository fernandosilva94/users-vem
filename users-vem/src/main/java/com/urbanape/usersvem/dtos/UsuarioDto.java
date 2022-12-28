package com.urbanape.usersvem.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UsuarioDto {
    
    @NotBlank
    @Size(max = 500)
    private String nome;

    @NotBlank
    @Size(min = 10)
    private String email;

    @NotBlank
    @Size(min = 6)
    private String senha;
}
