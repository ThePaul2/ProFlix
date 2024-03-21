package com.ecinema.springboot.ecinema.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;

@SpringBootApplication
@Configuration
@EnableEncryptableProperties
public class EcinemaSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcinemaSpringbootApplication.class, args);
	}

}
