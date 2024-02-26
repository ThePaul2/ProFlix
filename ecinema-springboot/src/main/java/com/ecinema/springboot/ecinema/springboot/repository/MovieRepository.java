package com.ecinema.springboot.ecinema.springboot.repository;

import com.ecinema.springboot.ecinema.springboot.model.Movies;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface MovieRepository extends MongoRepository<Movies, String> {
    List<Movies> findByTitle(String title);
    List<Movies> findByCategoryIn(List<String> category);
    @Query("{'cast': ?0}")
    List<Movies> findByCastMember(String castMember);
    List<Movies> findByDirector(String director);
    List<Movies> findByProducer(String producer);
    List<Movies> findByMpaaRating(String mpaaRating);
    List<Movies> findByComingSoon(boolean comingSoon);
    List<Movies> findByCurrentlyRunning(boolean currentlyRunning);
    @Query("{'reviews.reviewer': ?0}")
    List<Movies> findMoviesByReviewer(String reviewer);
    @Query("{'showDatesTimes.date': ?0}")
    List<Movies> findMoviesByShowDate(String date);
} // MovieRepository
