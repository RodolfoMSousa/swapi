package com.prova.swapi.rest;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
//@SpringBootTest
public class PessoaControllerTest {

    @InjectMocks
    PessoaController pessoaController;

    @Mock
    PessoaController pessoaControllerMock;

    @Before
    public void init() {

    }

    @Test
    public void soma() {
//        ResponseEntity<PessoasResponse> test = baseController.consulta();

//        System.out.println(test);
    }
}