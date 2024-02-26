package com.ecinema.springboot.ecinema.springboot.repository;

import com.ecinema.springboot.ecinema.springboot.model.Payments;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepository extends MongoRepository<Payments, String> {
    List<Payments> findByUserID(String userID);
    List<Payments> findByType(String type);
    List<Payments> findByStatus(String status);
    List<Payments> findByCardType(String cardType);
    List<Payments> findByCardLastFourNumbers(int lastFourNumbers);
    List<Payments> findByCardFirstName(String firstName);
    List<Payments> findByCardLastName(String lastName);
    List<Payments> findByCardExpiryMonth(int expiryMonth);
    List<Payments> findByCardExpiryYear(int expiryYear);
    List<Payments> findByCardCvvVerified(boolean cvvVerified);
} // PaymentRepository