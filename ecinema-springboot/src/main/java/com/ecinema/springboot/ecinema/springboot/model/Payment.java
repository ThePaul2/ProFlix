package com.ecinema.springboot.ecinema.springboot.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "payments")
public class Payment {

    @Id
    private String id;
    private String userId;
    private String type;
    private String status;
    private Card card;

    @Data
    public static class Card {
        private String type;
        private String lastFourNumbers;
        private String firstName;
        private String lastName;
        private int expiryMonth;
        private int expiryYear;
        private boolean cvvVerified;
    }
}
