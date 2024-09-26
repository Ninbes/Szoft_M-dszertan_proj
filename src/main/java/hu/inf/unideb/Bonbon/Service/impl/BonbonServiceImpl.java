package hu.inf.unideb.Bonbon.Service.impl;

import hu.inf.unideb.Bonbon.Entity.BonbonEntity;
import hu.inf.unideb.Bonbon.Entity.RatingEntity;
import hu.inf.unideb.Bonbon.Repository.BonbonRepository;
import hu.inf.unideb.Bonbon.Repository.RatingRepository;
import hu.inf.unideb.Bonbon.Service.BonbonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class BonbonServiceImpl implements BonbonService {

    @Autowired
    private BonbonRepository bonbonRepository;

    @Autowired
    private RatingRepository ratingRepository;

    public List<BonbonEntity> getAllItems() {
        return bonbonRepository.findAll();
    }

    public BonbonEntity addItem(BonbonEntity bonbon) {
        return bonbonRepository.save(bonbon);
    }

    public RatingEntity addRating(Long bonbonId, RatingEntity rating) {
        BonbonEntity bonbon = bonbonRepository.findById(bonbonId)
                .orElseThrow(() -> new RuntimeException("Bonbon not found"));
        rating.setBonbon(bonbon);
        return ratingRepository.save(rating);
    }

    public List<BonbonEntity> getBonbonsSortedByRating() {
        List<BonbonEntity> items = bonbonRepository.findAll();
        items.sort(Comparator.comparingDouble(this::calculateAverageRating).reversed());
        return items;
    }

    private double calculateAverageRating(BonbonEntity bonbon) {
        List<RatingEntity> ratings = ratingRepository.findByItem(bonbon);
        return ratings.stream().mapToInt(RatingEntity::getRating).average().orElse(0);
    }
}
