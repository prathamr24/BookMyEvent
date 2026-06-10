package com.example.BookMyEvent.repository;

import com.example.BookMyEvent.entity.ShowSeat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShowSeatRepository
        extends JpaRepository<ShowSeat, Long> {

    List<ShowSeat> findByShowId(
            Long showId
    );

    List<ShowSeat> findAllByIdIn(
            List<Long> ids
    );

    List<ShowSeat>
    findByShowIdOrderBySeat_RowLabelAscSeat_SeatIndexAsc(
            Long showId
    );
}