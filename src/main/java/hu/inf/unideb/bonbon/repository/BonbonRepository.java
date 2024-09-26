package hu.inf.unideb.bonbon.repository;

import hu.inf.unideb.bonbon.entity.BonbonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BonbonRepository extends JpaRepository<BonbonEntity, Long> {
}


