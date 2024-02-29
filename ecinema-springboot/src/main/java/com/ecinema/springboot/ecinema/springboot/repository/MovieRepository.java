package com.ecinema.springboot.ecinema.springboot.repository;

import com.ecinema.springboot.ecinema.springboot.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MovieRepository extends MongoRepository<Movie, String> {
}
