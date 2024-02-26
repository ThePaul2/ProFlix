import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ecinema.springboot.ecinema.springboot.model.Movies;
import com.ecinema.springboot.ecinema.springboot.repository.MovieRepository;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    // Get all movies
    @GetMapping
    public List<Movies> getAllMovies() {
        return movieRepository.findAll();
    }

    // Get a single movie by ID
    @GetMapping("/{id}")
    public Movies getMovieById(@PathVariable String id) {
        return movieRepository.findById(id).orElse(null);
    }

    // Add a new movie
    @PostMapping
    public Movies addMovie(@RequestBody Movies movie) {
        return movieRepository.save(movie);
    }

    // Update a movie
    @PutMapping("/{id}")
    public Movies updateMovie(@PathVariable String id, @RequestBody Movies movieDetails) {
        movieDetails.setId(id);
        return movieRepository.save(movieDetails);
    }

    // Delete a movie
    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable String id) {
        movieRepository.deleteById(id);
    }
}
