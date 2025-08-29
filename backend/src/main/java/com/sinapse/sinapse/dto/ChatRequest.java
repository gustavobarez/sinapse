package com.sinapse.sinapse.dto;

public class ChatRequest {
    
    private String message;

    public ChatRequest() {

    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "ChatRequest{message='" + message + "'}";
    }

}
