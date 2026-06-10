package com.example.BookMyEvent.exception;

public class InvalidShowSeatException
        extends RuntimeException {

    public InvalidShowSeatException(
            String message
    ) {
        super(message);
    }
}