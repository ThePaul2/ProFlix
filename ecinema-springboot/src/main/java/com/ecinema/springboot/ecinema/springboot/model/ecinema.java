package com.ecinema.springboot.ecinema.springboot.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ecinema")
public class Ecinema {
    @Id
    private String id;
    private String title;
    private String director;
    private String genre;
    private String year;
    private String rating;
    private String description;
    private String image;
    private String trailer;

}
