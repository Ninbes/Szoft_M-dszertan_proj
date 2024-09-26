package hu.inf.unideb.Bonbon.Service;

import hu.inf.unideb.Bonbon.Entity.BonbonEntity;
import hu.inf.unideb.Bonbon.Entity.RatingEntity;

import java.util.List;

public interface BonbonService {
    List<BonbonEntity> getAllItems();
    BonbonEntity addItem(BonbonEntity bonbon);
    RatingEntity addRating(Long bonbonId, RatingEntity rating);
    List<BonbonEntity> getBonbonsSortedByRating();
}
