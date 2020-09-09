package com.prova.swapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * Representa um planeta.
 */
@Data
public class Planeta {
    private String name;
    private String population;
    private String climate;
    @JsonProperty("rotation_period")
    private String rotationPeriod;
    @JsonProperty("orbital_period")
    private String orbitalPeriod;
    private String diameter;
    private String gravity;
    private String terrain;
    @JsonProperty("surface_water")
    private String surfaceWater;
}
