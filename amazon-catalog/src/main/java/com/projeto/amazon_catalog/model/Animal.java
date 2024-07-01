package com.projeto.amazon_catalog.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table( name = "tbanimal")
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @NotNull
    private String name;
    
    private String title;
    
    @Column(name="description", length=2147483647) 
    private String description;
    
    @Column(name="uriImage", length=2147483647) 
    private String uriImage;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    public String getUriImage() {
        return uriImage;
    }

    public void setUriImage(String uriImage) {
        this.uriImage = uriImage;
    }
    
}
