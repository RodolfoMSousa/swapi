package com.prova.swapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.prova.swapi"))
                .build()
                .apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        return new ApiInfo(
                "REST API Prova Tree",
                "API criada para realização do teste aplicado pela Tree.",
                "1.0.0",
                "Terms of service",
                new Contact("Rodolfo Miguel de Sousa", "https://github.com/RodolfoMSousa", "rodolfoms77@hotmail.com"),
                "License of API", "API license URL", Collections.emptyList());
    }

}
