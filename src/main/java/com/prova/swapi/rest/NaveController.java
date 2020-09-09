package com.prova.swapi.rest;

import com.prova.swapi.business.NaveBusiness;
import com.prova.swapi.model.NavesResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/naves")
@Api(value = "API REST Naves")
public class NaveController {

    @Autowired
    private NaveBusiness naveBusiness;

    @GetMapping
    @ApiOperation(value = "Recupera as naves com a paginação da swapi")
    public ResponseEntity<NavesResponse> getAllByPage(@RequestParam(defaultValue = "1") Integer page) {
        return ResponseEntity.ok(naveBusiness.consulta(page));
    }

    @GetMapping(value = "/getAll")
    @ApiOperation(value = "Recupera Todas as naves")
    public ResponseEntity<NavesResponse> getAllByPage() {
        return ResponseEntity.ok(naveBusiness.getAll());
    }
}
