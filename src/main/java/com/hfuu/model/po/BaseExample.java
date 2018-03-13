package com.hfuu.model.po;

public class BaseExample {
    private Long start;

    private Long limit;

    public void setStart(Long start) {
        this.start=start;
    }

    public Long getStart() {
        return start;
    }

    public void setLimit(Long limit) {
        this.limit=limit;
    }

    public Long getLimit() {
        return limit;
    }
}