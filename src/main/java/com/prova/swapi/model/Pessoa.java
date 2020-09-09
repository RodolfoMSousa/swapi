package com.prova.swapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * Representa uma pessoa.
 */
@Data
public class Pessoa extends BaseResource {
    private String name;
    @JsonProperty("birth_year")
    private String birthYear;
    private String gender;
    private String height;
    private String mass;
    @JsonProperty("hair_color")
    private String hairColor;
    @JsonProperty("skin_color")
    private String skinColor;
    @JsonProperty("eye_color")
    private String eyeColor;

}
