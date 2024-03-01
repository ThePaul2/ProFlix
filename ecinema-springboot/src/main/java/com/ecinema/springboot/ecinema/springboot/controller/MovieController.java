package com.ecinema.springboot.ecinema.springboot.controller;

import com.ecinema.springboot.ecinema.springboot.model.Movie;
import com.ecinema.springboot.ecinema.springboot.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @GetMapping("/{id}")
    public Movie getMovieById(@PathVariable String id) {
        return movieRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Movie addMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    @PutMapping("/{id}")
    public Movie updateMovie(@PathVariable String id, @RequestBody Movie movieDetails) {
        movieDetails.setId(id);
        return movieRepository.save(movieDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable String id) {
        movieRepository.deleteById(id);
    }

    @GetMapping("/search")
    public List<Movie> searchMoviesByTitle(@RequestParam String title) {
        return movieRepository.findByTitle(title);
    }

    @GetMapping("/category")
    public List<Movie> getMoviesByCategory(@RequestParam String category) {
        return movieRepository.findByCategory(category);
    }
}
