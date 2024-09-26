package hu.inf.unideb.bonbon.repository;

import hu.inf.unideb.bonbon.entity.BonbonEntity;
import hu.inf.unideb.bonbon.entity.RatingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
    public interface RatingRepository extends JpaRepository<RatingEntity, Long> {
        List<RatingEntity> findByItem(BonbonEntity bonbon);
    }
