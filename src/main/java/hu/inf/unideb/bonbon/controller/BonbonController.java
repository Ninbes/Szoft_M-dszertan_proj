package hu.inf.unideb.bonbon.controller;

import hu.inf.unideb.bonbon.entity.BonbonEntity;
import hu.inf.unideb.bonbon.entity.RatingEntity;
import hu.inf.unideb.bonbon.service.BonbonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bonbons")
public class BonbonController {

    @Autowired
    private BonbonService bonbonService;

    @GetMapping
    public List<BonbonEntity> getBonbons() {
        return bonbonService.getAllBonbons();
    }

    @PostMapping
    public ResponseEntity<BonbonEntity> addBonbon(@RequestBody BonbonEntity bonbon) {
        BonbonEntity createdBonbon = bonbonService.addBonbon(bonbon);
        return new ResponseEntity<>(createdBonbon, HttpStatus.CREATED);
    }

    @PostMapping("/{bonbonId}/rate")
    public RatingEntity rateBonbon(@PathVariable Long bonbonId, @RequestBody RatingEntity rating) {
        return bonbonService.addRating(bonbonId, rating);
    }

    @GetMapping("/sorted")
    public List<BonbonEntity> getSortedBonbons() {
        return bonbonService.getBonbonsSortedByRating();
    }
}
