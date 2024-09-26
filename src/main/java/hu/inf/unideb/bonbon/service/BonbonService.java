package hu.inf.unideb.bonbon.service;

import hu.inf.unideb.bonbon.entity.BonbonEntity;
import hu.inf.unideb.bonbon.entity.RatingEntity;

import java.util.List;

public interface BonbonService {
    List<BonbonEntity> getAllBonbons();
    BonbonEntity addBonbon(BonbonEntity bonbon);
    RatingEntity addRating(Long bonbonId, RatingEntity rating);
    List<BonbonEntity> getBonbonsSortedByRating();
}
