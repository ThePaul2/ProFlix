import http from "../http-common";

class MovieServices {
    getAll() {
        return http.get("/movies");
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
