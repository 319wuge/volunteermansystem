package com.hfuu.exceptions;

public class ErrorCodeException extends Exception{

    private int errorCode = 0;

    public ErrorCodeException(int errorCode, String message) {
        super(message);
        setErrorCode(errorCode);
    }

    public int getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(int errorCode) {
        this.errorCode = errorCode;
    }
}
