package com.ecinema.springboot.ecinema.springboot.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@Data // Generates getters, setters, toString, equals, and hashCode methods
@NoArgsConstructor // Generates a no-args constructor
@AllArgsConstructor // Generates an all-args constructor
public class Users {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private Address billingAddress;
    private Address[] shippingAddress;
    private String password;

    @Data // Also generates getters, setters, toString, equals, and hashCode for the nested class
    @NoArgsConstructor // Generates a no-args constructor for the nested class
    @AllArgsConstructor // Generates an all-args constructor for the nested class
    public static class Address {
        private String country;
        private String street1;
        private String street2;
        private String city;
        private String state;
        private String zip;
    }
}
