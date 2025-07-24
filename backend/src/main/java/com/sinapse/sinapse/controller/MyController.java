package com.sinapse.sinapse.controller;

import java.util.Map;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
public class MyController {
    private final ChatClient chatClient;

    public MyController(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @GetMapping("/ai/generate")
    public Map<String, Object> generate(@RequestParam String message) throws JsonProcessingException {
        String engineeredMessage = "Get a fresh perspective! Simply provide a message, and rephrase it into one big sentence for my ecommerce application. Only give me the result. I don't need extra details. Here's the input: "
                + message;

        String response = chatClient.prompt()
                .user(engineeredMessage)
                .call()
                .content();

        return Map.of("result", response);
    }
}