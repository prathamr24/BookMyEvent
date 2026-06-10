package com.example.BookMyEvent.controller;

import com.example.BookMyEvent.dto.request.LoginRequest;
import com.example.BookMyEvent.dto.request.RegisterRequest;
import com.example.BookMyEvent.dto.response.AuthResponse;
import com.example.BookMyEvent.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public AuthResponse register(
            @RequestBody RegisterRequest request
    ) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request
    ) {
        return authService.login(request);
    }
}
