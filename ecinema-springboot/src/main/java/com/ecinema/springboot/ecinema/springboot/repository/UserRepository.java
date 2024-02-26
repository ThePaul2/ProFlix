package com.ecinema.springboot.ecinema.springboot.repository;

import com.ecinema.springboot.ecinema.springboot.model.Users;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<Users, String> {
     List<Users> findByFirstName(String firstName);
    List<Users> findByLastName(String lastName);
    List<Users> findByBillingAddressCountry(String country);
    List<Users> findByBillingAddressStreet1(String street1);
    List<Users> findByBillingAddressStreet2(String street2);
    List<Users> findByBillingAddressCity(String city);
    List<Users> findByBillingAddressState(String state);
    List<Users> findByBillingAddressZip(String zip);
    List<Users> findByShippingAddressCountry(String country);
    List<Users> findByShippingAddressStreet1(String street1);
    List<Users> findByShippingAddressStreet2(String street2);
    List<Users> findByShippingAddressCity(String city);
    List<Users> findByShippingAddressState(String state);
    List<Users> findByShippingAddressZip(String zip);
    List<Users> findByPassword(String password);
} // UserRepository

