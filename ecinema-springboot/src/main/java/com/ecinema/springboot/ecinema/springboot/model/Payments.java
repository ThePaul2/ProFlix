package com.ecinema.springboot.ecinema.springboot.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data // Generates getters, setters, toString, equals, and hashCode methods
@NoArgsConstructor // Generates a no-args constructor
@Document(collection = "promotions")
public class Payments {
    @Id
    private String id;
    private String userID;
    private String type;
    private String status;
    private Card card;

    @Data // Also generates getters, setters, toString, equals, and hashCode for the nested class
    @NoArgsConstructor // Generates a no-args constructor for the nested class
    public static class Card {
        private String type;
        private int lastFourNumbers;
        private String firstName;
        private String lastName;
        private int expiryMonth;
        private int expiryYear; 
        private boolean cvvVerified;
    } // Card
}
