package com.example.BookMyEvent.exception;

public class ScreenAlreadyExistsException
        extends RuntimeException {

    public ScreenAlreadyExistsException(
            String message
    ) {
        super(message);
    }
}
