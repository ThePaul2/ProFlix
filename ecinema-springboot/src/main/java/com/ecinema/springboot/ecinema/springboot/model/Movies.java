package com.ecinema.springboot.ecinema.springboot.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data // Generates getters, setters, toString, equals, and hashCode methods
@NoArgsConstructor // Generates a no-args constructor
@AllArgsConstructor // Generates an all-args constructor
@Document(collection = "ecinema")
public class Movies {
    @Id
    private String id;
    private String title;
    private List<String> category; 
    private List<String> cast;
    private String director;
    private String producer; 
    private String synopsis; 
    private List<Review> reviews; 
    private Trailer trailer; 
    private String mpaaRating;
    private List<ShowDateTimes> showDatesTimes; 
    private boolean comingSoon; 
    private boolean currentlyRunning; 

    @Data // For nested classes, Lombok annotations can also be applied
    public static class Review {
        private String reviewer;
        private String comment;
        private int rating; 
    } // Review

    @Data
    public static class Trailer {
        private String picture;
        private String video;
    } // Trailer

    @Data
    public static class ShowDateTimes {
        private String date;
        private List<String> times;
    } // ShowDateTimes
}
