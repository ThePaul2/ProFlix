package com.ecinema.springboot.ecinema.springboot.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Document(collection = "movies")
public class Movie {

    @Id
    private String id;
    private String title;
    private List<String> category;
    private List<String> cast;
    private String director;
    private String producer;
    private String synopsis;
    private List<Review> reviews;
    private String trailer;
    private String poster;
    private String mpaaRating;
    private List<ShowDate> showDatesTimes;
    private boolean comingSoon;
    private boolean currentlyRunning;
}

@Data
class Review {
    private String reviewer;
    private String comment;
    private int rating;
}

@Data
class ShowDate {
    private String date;
    private List<String> times;
}
