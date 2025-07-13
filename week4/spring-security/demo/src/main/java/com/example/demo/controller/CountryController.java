package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Country;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class CountryController {

    List<Country> countrys =new ArrayList<>(List.of(
            new Country(1,"India","IN"),
            new Country(2,"Australia","AUS")
    ));

    @GetMapping("csrf-token")
    public CsrfToken getCsrfToken(HttpServletRequest request) {
        return (CsrfToken) request.getAttribute("_csrf");
    }


    @GetMapping("countries")
    public List<Country> getCountries(){
        return countrys;
    }

    @PostMapping("countries")
    public void addCountry(@RequestBody Country country) {
        countrys.add(country);
    }
}