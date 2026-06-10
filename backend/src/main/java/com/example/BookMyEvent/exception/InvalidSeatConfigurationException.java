package com.example.BookMyEvent.exception;

public class InvalidSeatConfigurationException
        extends RuntimeException {

    public InvalidSeatConfigurationException(
            String message
    ) {
        super(message);
    }
}