package com.ecinema.springboot.ecinema.springboot.repository;

import com.ecinema.springboot.ecinema.springboot.model.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepository extends MongoRepository<Payment, String> {
}
