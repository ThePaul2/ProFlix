import http from "../http-common";

class MovieServices {
    getAll() {
        return http.get("/movies")
            .then(response => {
                // Assuming the response.data contains an array of movie objects
                // Each movie object contains properties as specified in the Movie class model
                return response.data.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    category: movie.category,
                    cast: movie.cast,
                    director: movie.director,
                    producer: movie.producer,
                    synopsis: movie.synopsis,
                    reviews: movie.reviews,
                    trailer: movie.trailer,
                    poster: movie.poster,
                    mpaaRating: movie.mpaaRating,
                    showDatesTimes: movie.showDatesTimes,
                    comingSoon: movie.comingSoon,
                    currentlyRunning: movie.currentlyRunning
                }));
            })
            .catch(error => {
                console.error("Error fetching all movies:", error);
                throw error; 
            });
    }
    get(id) {
        return http.get(`/movies/${id}`);
    }
    addMovie(data) {
        return http.post("/movies", data);
    }
    updateMovie(id, data) {
        return http.put(`/movies/${id}`, data);
    }
    deleteMovie(id) {
        return http.delete(`/movies/${id}`);
    }
    searchMovie(title) {
        return http.get(`/movies/search?title=${title}`);
    }
    getMoviesByCategory(category) {
        return http.get(`/movies/category?category=${category}`);
    }
    
}

const movieServices = new MovieServices();
export default movieServices;
