package com.example.fb_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.XADataSourceAutoConfiguration;

@SpringBootApplication
public class FbBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(FbBackendApplication.class, args);
    }

}
