package hu.inf.unideb.bonbon.controller;

import hu.inf.unideb.bonbon.entity.*;
import hu.inf.unideb.bonbon.service.BonbonService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public BonbonEntity addBonbon(@RequestBody BonbonEntity bonbon) {
        return bonbonService.addBonbon(bonbon);
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

