package hu.inf.unideb.bonbon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "rating_entity")
public class RatingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "bonbon_id")
    private BonbonEntity bonbon;

    private int rating; // 1 to 5
    private String review; // Optional field for comments

}