package com.ecinema.springboot.ecinema.springboot.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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

    public static class Review {
        private String reviewer;
        private String comment;
        private int rating; 
    } // Review

    public static class Trailer {
        private String picture;
        private String video;

    } // Trailer

    public static class ShowDateTimes {
        private String date;
        private List<String> times;
    } // ShowDateTimes

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public List<String> getCategory() {
        return category;
    }
    public void setCategory(List<String> category) {
        this.category = category;
    }
    public List<String> getCast() {
        return cast;
    }
    public void setCast(List<String> cast) {
        this.cast = cast;
    }
    public String getDirector() {
        return director;
    }
    public void setDirector(String director) {
        this.director = director;
    }
    public String getProducer() {
        return producer;
    }
    public void setProducer(String producer) {
        this.producer = producer;
    }
    public String getSynopsis() {
        return synopsis;
    }
    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }
    public List<Review> getReviews() {
        return reviews;
    }
    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
    public Trailer getTrailer() {
        return trailer;
    }
    public void setTrailer(Trailer trailer) {
        this.trailer = trailer;
    }
    public String getMpaaRating() {
        return mpaaRating;
    }
    public void setMpaaRating(String mpaaRating) {
        this.mpaaRating = mpaaRating;
    }
    public List<ShowDateTimes> getShowDatesTimes() {
        return showDatesTimes;
    }
    public void setShowDatesTimes(List<ShowDateTimes> showDatesTimes) {
        this.showDatesTimes = showDatesTimes;
    }
    public boolean isComingSoon() {
        return comingSoon;
    }
    public void setComingSoon(boolean comingSoon) {
        this.comingSoon = comingSoon;
    }
    public boolean isCurrentlyRunning() {
        return currentlyRunning;
    }
    public void setCurrentlyRunning(boolean currentlyRunning) {
        this.currentlyRunning = currentlyRunning;
    }
    @Override
    public String toString() {
        return "Movies [id=" + id + ", title=" + title + ", category=" + category + ", cast=" + cast
                + ", director=" + director + ", producer=" + producer + ", synopsis=" + synopsis + ", reviews="
                + reviews + ", trailer=" + trailer + ", mpaaRating=" + mpaaRating + ", showDatesTimes="
                + showDatesTimes + ", comingSoon=" + comingSoon + ", currentlyRunning=" + currentlyRunning + "]";
    }
}
