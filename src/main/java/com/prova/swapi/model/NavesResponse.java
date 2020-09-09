package com.prova.swapi.model;

import lombok.Data;

import java.util.List;

/**
 * Representa uma resposta com uma lista de Naves
 */
@Data
public class NavesResponse extends Response {
    private List<Nave> results;
}
