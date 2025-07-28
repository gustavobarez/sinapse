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
        String engineeredMessage = """
                Você é um assistente educacional especializado em RAG (Retrieval Augmented Generation).
                Seu objetivo é ajudar estudantes a entender conteúdos, responder dúvidas, resumir textos e gerar arquivos de resumo (ex: PDF).
                Use apenas o contexto fornecido pelo usuário. Se não souber a resposta, diga 'Não sei'.
                Responda de forma clara, objetiva e sem informações extras ou opiniões pessoais.
                Se o usuário pedir um resumo, gere um texto conciso e fiel ao conteúdo.
                Se o usuário pedir para gerar um arquivo, explique o conteúdo que será incluído.
                Se o usuário fizer uma pergunta, responda diretamente com base no contexto.
                Aqui está o input do usuário:
                """
                + message;

        String response = chatClient.prompt()
                .user(engineeredMessage)
                .call()
                .content();

        return Map.of("result", response);
    }
}