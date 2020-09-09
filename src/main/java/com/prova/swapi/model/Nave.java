package com.prova.swapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
/**
 * Representa uma pessoa.
 */
@Data
public class Nave {
    private String name;
    private String model;
    private String passengers;
    private String manufacturer;
    @JsonProperty("cost_in_credits")
    private String costInCredits;
    private String length;
    @JsonProperty("max_atmosphering_speed")
    private String maxAtmospheringSpeed;
    private String crew;
    @JsonProperty("cargo_capacity")
    private String cargoCapacity;
    @JsonProperty("MGLT")
    private String mglt;
    @JsonProperty("starship_class")
    private String starshipClass;
    private Double autonomia;

}
