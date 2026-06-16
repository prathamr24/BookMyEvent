package com.example.BookMyEvent.repository;

import com.example.BookMyEvent.entity.Show;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface ShowRepository
        extends JpaRepository<Show, Long> {

    @Query("""
            SELECT COUNT(s) > 0
            FROM Show s
            WHERE s.screen.id = :screenId
            AND s.status <> 'CANCELLED'
            AND (
                    :startTime < s.endTime
                    AND
                    :endTime > s.startTime
            )
            """)
    boolean existsConflictingShow(
            Long screenId,
            LocalDateTime startTime,
            LocalDateTime endTime
    );

    List<Show> findByMovieId(Long movieId);
}