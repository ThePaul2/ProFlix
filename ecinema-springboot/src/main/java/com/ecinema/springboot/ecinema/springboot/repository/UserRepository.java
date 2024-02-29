package com.ecinema.springboot.ecinema.springboot.repository;

import com.ecinema.springboot.ecinema.springboot.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
