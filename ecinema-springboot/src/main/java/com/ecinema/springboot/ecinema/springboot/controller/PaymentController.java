package com.ecinema.springboot.ecinema.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ecinema.springboot.ecinema.springboot.model.Payments;
import com.ecinema.springboot.ecinema.springboot.repository.PaymentRepository;

import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    // Get all payments
    @GetMapping
    public List<Payments> getAllPayments() {
        return paymentRepository.findAll();
    }

    // Get payment by ID
    @GetMapping("/{id}")
    public Payments getPaymentById(@PathVariable String id) {
        return paymentRepository.findById(id).orElse(null);
    }

    // Add a payment
    @PostMapping
    public Payments addPayment(@RequestBody Payments payment) {
        return paymentRepository.save(payment);
    }

    // Update a payment
    @PutMapping("/{id}")
    public Payments updatePayment(@PathVariable String id, @RequestBody Payments paymentDetails) {
        paymentDetails.setId(id);
        return paymentRepository.save(paymentDetails);
    }

    // Delete a payment
    @DeleteMapping("/{id}")
    public void deletePayment(@PathVariable String id) {
        paymentRepository.deleteById(id);
    }
}
