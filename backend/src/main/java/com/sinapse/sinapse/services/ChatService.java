package com.sinapse.sinapse.services;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.client.advisor.SimpleLoggerAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.memory.MessageWindowChatMemory;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    private final ChatClient chatClient;

    public ChatService(ChatClient.Builder chatClientBuilder) {

        ChatMemory chatMemory = MessageWindowChatMemory.builder()
            .maxMessages(10)
            .build();

        OpenAiChatOptions options = new OpenAiChatOptions();
        options.setModel("llama-3.3-70b-versatile");
        this.chatClient = chatClientBuilder
                .defaultOptions(options)
                .defaultAdvisors(MessageChatMemoryAdvisor.builder(chatMemory).build(),
                new SimpleLoggerAdvisor()
                )
                .build();

    }

    public String generate(String message) {
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

        String response = chatClient
                .prompt()
                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, "123456"))
                .user(engineeredMessage)
                .call()
                .content();

        return response;
    }

}
