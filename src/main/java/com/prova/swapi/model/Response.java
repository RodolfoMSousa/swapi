package com.prova.swapi.model;

import lombok.Data;

/**
 * Representa uma resposta com o padrão de paginação da API swapi
 */
@Data
public class Response {
    private Integer count;
    private String next;
    private String previous;
}
