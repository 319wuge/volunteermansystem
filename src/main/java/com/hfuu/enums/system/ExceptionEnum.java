package com.hfuu.enums.system;

public enum ExceptionEnum {
    SESSION_UN_LOGIN(1000, "请先进行登录"),
    USER_NOT_FOUND(1001, "用户不存在"),
    USER_IS_EXIST(1002, "用户已存在"),
    USER_LOGIN_ERROR(1003, "登录失败"),
    USER_LOGOUT_ERROR(1004, "退出失败"),
    USER_PASSWORD_ERROR(1005, "密码不正确"),
    USER_BASE_PARAMS_ILLEGAL(1015,"参数不合法"),
    USER_NOT_CHOOSE_IDENTITY(1032,"用户未选择身份"),
    USER_CHOOSE_IDENTITY(1035,"用户已经选择身份"),
    USER_PASSWORD_OR_ACCOUNT_ERROR(1040,"账号或密码不正确"),
    SYSTEM_TIMEOUT(1044,"系统错误请稍后重试"),

    ORDER_COMMIT_REPEAT(3031,"请勿重复提交！"),
    MANAGE_SEARCH_ERROR(10008,"查询失败"),
    MANAGE_ADD_ITEM_ERROR(10012,"添加失败"),
    MANAGE_EDIT_ITEM_ERROR(10013,"修改失败,若多次失败请联系开发人员");

    private int code;
    private String message;

    private ExceptionEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
