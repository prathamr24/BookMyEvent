package com.example.BookMyEvent.repository;

import com.example.BookMyEvent.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository
        extends JpaRepository<Movie, Long> {

    boolean existsByTitle(String title);
}