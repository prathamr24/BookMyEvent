package com.example.BookMyEvent.dto.response;

import com.example.BookMyEvent.entity.SeatType;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SeatResponse {

    private Long id;

    private String seatNumber;

    private String rowLabel;

    private Integer seatIndex;

    private SeatType seatType;
}