package com.prova.swapi.business;

import com.prova.swapi.model.NavesResponse;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;

@Component
public class NaveBusiness extends AbstractBusiness {

    private static final String RESOURCE = "starships/";

    public NavesResponse consulta(Integer page) {
        NavesResponse response = getPaginated(RESOURCE, page, new ParameterizedTypeReference<NavesResponse>() {
        });
        return response;
    }

    public NavesResponse getAll() {
        Integer page = 1;
        NavesResponse response = getPaginated(RESOURCE, page, new ParameterizedTypeReference<NavesResponse>() {
        });
        NavesResponse nextResponse;
        do {
            page++;
            nextResponse = getPaginated(RESOURCE, page, new ParameterizedTypeReference<NavesResponse>() {});
            response.setNext(nextResponse.getNext());
            response.getResults().addAll(nextResponse.getResults());
        } while (nextResponse.getNext() != null);

        return response;
    }

}
