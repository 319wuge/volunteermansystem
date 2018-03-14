package com.hfuu.exceptions;

import com.hfuu.enums.system.ExceptionEnum;

public class ServiceExceptionSpec extends ErrorCodeException{

    public ServiceExceptionSpec(ExceptionEnum exceptionEnum) {
        super(exceptionEnum.getCode(), exceptionEnum.getMessage());
    }
}
