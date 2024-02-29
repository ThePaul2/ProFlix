package com.ecinema.springboot.ecinema.springboot.model;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Document(collection = "users")
public class User {

    @Id
    private String id; // Email as ID
    private String firstName;
    private String lastName;
    private Address billingAddress;
    private List<Address> shippingAddress;
    private String password;

    @Data
    public static class Address {
        private String country;
        private String street1;
        private String street2;
        private String city;
        private String state;
        private String zipCode;
    }
}
