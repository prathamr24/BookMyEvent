package com.example.BookMyEvent.controller;

import com.example.BookMyEvent.dto.request.TheaterRequest;
import com.example.BookMyEvent.dto.response.TheaterResponse;
import com.example.BookMyEvent.service.TheaterService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/theaters")
@RequiredArgsConstructor
public class TheaterController {

    private final TheaterService theaterService;

    @PostMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public TheaterResponse createTheater(
            @Valid @RequestBody TheaterRequest request
    ) {

        return theaterService.createTheater(request);
    }

    @GetMapping
    public List<TheaterResponse> getAllTheaters() {

        return theaterService.getAllTheaters();
    }

    @GetMapping("/{id}")
    public TheaterResponse getTheaterById(
            @PathVariable Long id
    ) {

        return theaterService.getTheaterById(id);
    }
}