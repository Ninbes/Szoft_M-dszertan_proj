package hu.inf.unideb.bonbon.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "bonbon_entity")
public class BonbonEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    @OneToMany(mappedBy = "bonbon", cascade = CascadeType.ALL)
    private List<RatingEntity> ratings = new ArrayList<>();
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<RatingEntity> getRatings() {
        return ratings;
    }

    public void setRatings(List<RatingEntity> ratings) { //TODO possibly not needed
        this.ratings = ratings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}