package com.sinapse.sinapse.config;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChatClientConfiguration {

    @Bean
    public ChatClient chatClient(ChatClient.Builder builder) {
        OpenAiChatOptions options = new OpenAiChatOptions();
        options.setModel("openai/gpt-oss-20b");

        return builder
                .defaultOptions(options)
                .build();
    }
}