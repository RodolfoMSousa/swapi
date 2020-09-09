package com.prova.swapi.business;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

public abstract class AbstractBusiness {

    public <T> T getPaginated(String resource, Integer page, ParameterizedTypeReference<T> responseType) {
        RestTemplate restTemplate = new RestTemplate();

        UriComponents uri = UriComponentsBuilder.newInstance()
                .scheme("https")
                .host("swapi.dev")
                .path("api/")
                .path(resource)
                .queryParam("page", page)
                .build();

        return restTemplate.exchange(uri.toUriString(), HttpMethod.GET, null, responseType).getBody();
    }

}
