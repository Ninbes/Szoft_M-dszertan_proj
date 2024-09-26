package hu.inf.unideb.Bonbon.Repository;

import hu.inf.unideb.Bonbon.Entity.BonbonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BonbonRepository extends JpaRepository<BonbonEntity, Long> {
}


