/*
 * Copyright (c) 2014-2015 XXX, Inc. All Rights Reserved.
 */

package com.hfuu.utils;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonParser.Feature;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Map;

/**
 * @author niebiaofei
 *
 */
public class JsonUtils {

    private static final Logger logger = LoggerFactory.getLogger(JsonUtils.class);
    private static final ObjectMapper objectMapper = new ObjectMapper();

    static {
        objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        objectMapper.configure(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES, false);
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        objectMapper.configure(Feature.ALLOW_UNQUOTED_CONTROL_CHARS, true);
    }


    public static <T> T deserializeConfig(String string, Class<T> clazz) {
        if (StringUtils.isBlank(string)) {
            throw new IllegalArgumentException(
                    "Blank string cannot be deserialized to class");
        }
        try {
            objectMapper.configure(JsonParser.Feature.ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER,true);
            T t = objectMapper.readValue(string, clazz);
            return t;
        } catch (IOException e) {
            logger.error(
                    "Error deserializing string: " + string, e);
            throw new IllegalArgumentException(
                    "Error deserializing string: " + string, e);
        }
    }

    public static <T> T deserialize(String string, Class<T> clazz) {
        if (StringUtils.isBlank(string)) {
            throw new IllegalArgumentException(
                    "Blank string cannot be deserialized to class");
        }

        try {
            T t = objectMapper.readValue(string, clazz);
            return t;
        } catch (IOException e) {
            logger.error(
                    "Error deserializing string: " + string, e);
            throw new IllegalArgumentException(
                    "Error deserializing string: " + string, e);
        }
    }

    public static <T> T deserialize(String string, TypeReference<T> typeReference) {
        if (StringUtils.isBlank(string)) {
            throw new IllegalArgumentException(
                    "Blank string cannot be deserialized to class");
        }

        try {
            T t = objectMapper.readValue(string, typeReference);
            return t;
        } catch (IOException e) {
            logger.error(
                    "Error deserializing string: " + string, e);
            throw new IllegalArgumentException(
                    "Error deserializing string: " + string, e);
        }
    }

    public static String serialize(Object obj) {
        if (obj == null) {
            throw new IllegalArgumentException("Null Object cannot be serialized");
        }

        try {
            return objectMapper.writeValueAsString(obj);
        } catch (JsonProcessingException e) {
            logger.error("Error serializing object", e);
            throw new IllegalArgumentException("Error serializing object: " + e.getMessage());
        }
    }

    public static boolean isJSONValid(String string) {
        try {
            objectMapper.readTree(string);
            return true;
        } catch (IOException e) {
            return false;
        }
    }

    public static <T> boolean isJSONValid(String string, Class<T> clazz) {
        if (StringUtils.isBlank(string)) {
            return false;
        }

        try {
            objectMapper.readValue(string, clazz);
            return true;
        } catch (IOException e) {
            return false;
        }
    }

    public static Map<String, Object> toMap(String jsonStr) {
        try {
            return objectMapper.readValue(jsonStr, Map.class);
        } catch (Exception e) {
            logger.error("json parse error, jsonStr= " + jsonStr, e);
            return null;
        }
    }
}
