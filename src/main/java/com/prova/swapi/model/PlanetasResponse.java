package com.prova.swapi.model;

import lombok.Data;

import java.util.List;

/**
 * Representa uma resposta com uma lista de Planetas
 */
@Data
public class PlanetasResponse extends Response{
    private List<Planeta> results;
}
