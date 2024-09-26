package hu.inf.unideb.bonbon.service.impl;

import hu.inf.unideb.bonbon.entity.BonbonEntity;
import hu.inf.unideb.bonbon.entity.RatingEntity;
import hu.inf.unideb.bonbon.repository.BonbonRepository;
import hu.inf.unideb.bonbon.repository.RatingRepository;
import hu.inf.unideb.bonbon.service.BonbonService;
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

    public List<BonbonEntity> getAllBonbons() {
        return bonbonRepository.findAll();
    }

    public BonbonEntity addBonbon(BonbonEntity bonbon) {
        return bonbonRepository.save(bonbon);
    }

    public RatingEntity addRating(Long bonbonId, RatingEntity rating) {
        BonbonEntity bonbon = bonbonRepository.findById(bonbonId)
                .orElseThrow(() -> new RuntimeException("Bonbon not found"));
        rating.setBonbon(bonbon);
        return ratingRepository.save(rating);
    }

    public List<BonbonEntity> getBonbonsSortedByRating() {
        List<BonbonEntity> bonbons = bonbonRepository.findAll();
        bonbons.sort(Comparator.comparingDouble(this::calculateAverageRating).reversed());
        return bonbons;
    }

    private double calculateAverageRating(BonbonEntity bonbon) {
        List<RatingEntity> ratings = ratingRepository.findByItem(bonbon);
        return ratings.stream().mapToInt(RatingEntity::getRating).average().orElse(0);
    }
}
