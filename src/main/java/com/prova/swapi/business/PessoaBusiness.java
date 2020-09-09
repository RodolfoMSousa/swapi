package com.prova.swapi.business;

import com.prova.swapi.model.Pessoa;
import com.prova.swapi.model.PessoasResponse;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class PessoaBusiness extends AbstractBusiness {

    private static final String RESOURCE = "people/";

    public PessoasResponse consulta(Integer page) {
        PessoasResponse response = getPaginated(RESOURCE, page, new ParameterizedTypeReference<PessoasResponse>() {
        });
        setIdFromUrlResourse(response);
        return response;
    }

    private void setIdFromUrlResourse(PessoasResponse response) {
        for(Pessoa pessoa : response.getResults()) {
            String url = pessoa.getUrl();
            List<String> split = Arrays.asList(url.split("/"));
            pessoa.setId(split.get(split.size()-1));
        }
    }
}