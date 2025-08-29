package com.sinapse.sinapse.controller;

import java.io.BufferedReader;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sinapse.sinapse.dto.ChatRequest;
import com.sinapse.sinapse.services.ChatService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    public ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/ai/generate")
    public ResponseEntity<?> generate(HttpServletRequest request) throws Exception {
        StringBuilder body = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                body.append(line);
            }
        }

        String jsonBody = body.toString();

        if (jsonBody.isEmpty()) {
            return ResponseEntity.badRequest().body("Body vazio");
        }

        ObjectMapper mapper = new ObjectMapper();
        ChatRequest chatRequest = mapper.readValue(jsonBody, ChatRequest.class);
        String message = chatRequest.getMessage();
        String response = this.chatService.generate(message);
        return ResponseEntity.ok(Map.of("result", response));
    }

}