package com.prova.swapi.model;

import lombok.Data;

import java.util.List;

/**
 * Representa uma resposta com uma lista de Pessoas
 */
@Data
public class PessoasResponse extends Response {
    private List<Pessoa> results;
}
