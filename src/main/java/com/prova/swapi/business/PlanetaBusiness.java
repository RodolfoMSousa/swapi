package com.prova.swapi.business;

import com.prova.swapi.model.PlanetasResponse;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;

@Component
public class PlanetaBusiness extends AbstractBusiness{

    private static final String RESOURCE = "planets/";

    public PlanetasResponse consulta(Integer page) {
        PlanetasResponse response = getPaginated(RESOURCE, page, new ParameterizedTypeReference<PlanetasResponse>() {
        });
        return response;
    }

}
