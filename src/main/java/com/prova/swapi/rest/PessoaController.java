package com.prova.swapi.rest;

import com.prova.swapi.business.PessoaBusiness;
import com.prova.swapi.model.PessoasResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/personagens")
@Api(value = "BASE API")
public class PessoaController {

    @Autowired
    private PessoaBusiness pessoaBusiness;

    @GetMapping
    @ApiOperation(value = "Busca todos os personagens com a paginação da SWAPI")
    public ResponseEntity<PessoasResponse> getAllByPage(@RequestParam(defaultValue = "1") Integer page) {
        return ResponseEntity.ok(pessoaBusiness.consulta(page));
    }

}
