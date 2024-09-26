package hu.inf.unideb.Bonbon.Repository;

import hu.inf.unideb.Bonbon.Entity.BonbonEntity;
import hu.inf.unideb.Bonbon.Entity.RatingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
    public interface RatingRepository extends JpaRepository<RatingEntity, Long> {
        List<RatingEntity> findByItem(BonbonEntity bonbon);
    }
