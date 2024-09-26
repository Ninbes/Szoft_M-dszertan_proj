package hu.inf.unideb.Bonbon.Entity;

import hu.inf.unideb.Bonbon.Entity.BonbonEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class RatingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }


    @ManyToOne
    @JoinColumn(name = "bonbon_id")
    private BonbonEntity bonbon;

    private int rating; // 1 to 5
    private String review; // Optional field for comments

    public void setId(Long id) {
        this.id = id;
    }

    public BonbonEntity getBonbon() {
        return bonbon;
    }

    public void setBonbon(BonbonEntity bonbon) {
        this.bonbon = bonbon;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

}