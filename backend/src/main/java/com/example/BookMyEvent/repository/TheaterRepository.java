package com.example.BookMyEvent.repository;

import com.example.BookMyEvent.entity.Theater;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TheaterRepository
        extends JpaRepository<Theater, Long> {
}