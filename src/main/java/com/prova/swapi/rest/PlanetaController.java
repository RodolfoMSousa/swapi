package com.prova.swapi.rest;

import com.prova.swapi.business.PlanetaBusiness;
import com.prova.swapi.model.PlanetasResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/planetas")
@Api(value = "BASE API")
public class PlanetaController {

    @Autowired
    private PlanetaBusiness planetaBusiness;

    @GetMapping
    @ApiOperation(value = "Recupera os planetas com a paginação da swapi")
    public ResponseEntity<PlanetasResponse> getAllByPage(@RequestParam(defaultValue = "1") Integer page) {
        return ResponseEntity.ok(planetaBusiness.consulta(page));
    }
}
