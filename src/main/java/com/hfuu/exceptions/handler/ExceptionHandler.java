/*
 * Copyright (c) 2014-2015 XXX, Inc. All Rights Reserved.
 */

package com.hfuu.exceptions.handler;

import com.google.common.collect.ImmutableList;
import com.hfuu.exceptions.ErrorCodeException;
import com.hfuu.exceptions.ServiceExceptionSpec;
import com.hfuu.model.ResponseEntity;
import com.hfuu.model.ResponseEntityBuilder;
import com.hfuu.utils.JsonUtils;
import org.apache.http.HttpStatus;
import org.apache.log4j.MDC;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MediaType;
import java.util.Map;
import java.util.UUID;

@Component
public class ExceptionHandler implements HandlerExceptionResolver {

    private static Logger logger = LoggerFactory.getLogger(ExceptionHandler.class);

    private static final ImmutableList<?> omittedExceptionSpecs = ImmutableList
            .of(ServiceExceptionSpec.class);

    public static void setResponse(HttpServletRequest request, HttpServletResponse response,
                                   Object obj,
                                   Exception ex) {

        if (MDC.get("X-Request-Id") == null) {
            MDC.put("X-Request-Id", UUID.randomUUID());
        }

        logger.error("the exception url: ", request!=null?request.getRequestURI():null);

        Throwable t = ex;
        Integer status = HttpStatus.SC_INTERNAL_SERVER_ERROR;
        response.setContentType(MediaType.APPLICATION_JSON);

        if (shouldLogExceptionSpec(ex)) {
            status = HttpStatus.SC_OK;
            response.setStatus(status);
            logger.error("Service exception {}", ex.getMessage());
            addExceptionToResponseBody(response, t, null, false);
            return;
        }
        if (status == HttpStatus.SC_INTERNAL_SERVER_ERROR) {
            logger.error("Exception {}", ex);
        }
        response.setStatus(status);
        //TODO 调试阶段去掉加密
        addExceptionToResponseBody(response, t, null, true);

        MDC.remove("X-Request-Id");

    }

    public static void addExceptionToResponseBody(HttpServletResponse response,
            Throwable ex,
            Map<String, String> data,
            boolean isEncode) {
        try {
            ResponseEntity<Object> entity = null;
            if (response.getStatus() == HttpStatus.SC_OK) {
                ErrorCodeException errorCodeException = (ErrorCodeException) ex;
                entity = new ResponseEntityBuilder<Object>()
                        .code(errorCodeException.getErrorCode())
                        .message(errorCodeException.getMessage())
                        .data(data)
                        .build();
            } else {
                entity = new ResponseEntityBuilder<Object>()
                        .code(-1)
                        .message(ex.getMessage())
                        .data(data)
                        .build();
            }
            response.getWriter().print(JsonUtils.serialize(entity));
        } catch (Exception e) {
            logger.error("failed to write response JSON", e);
            MDC.remove("X-Request-Id");
            throw new IllegalStateException(e);
        }
    }

    private static boolean shouldLogExceptionSpec(Exception ex) {
        boolean ret = omittedExceptionSpecs.contains(ex.getClass());
        return ret;
    }

    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response,
                                         Object obj, Exception ex) {
        setResponse(request, response, obj, ex);
        return new ModelAndView();
    }

}