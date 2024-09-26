package hu.inf.unideb.Bonbon.Controller;

import hu.inf.unideb.Bonbon.Entity.*;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/{itemId}/rate")
    public RatingEntity rateBonbon(@PathVariable Long bonbonId, @RequestBody RatingEntity rating) {

        return bonbonService.addRating(bonbonId, rating);
    }

    @GetMapping("/sorted")
    public List<BonbonEntity> getSortedBonbons() {
        return bonbonService.getBonbonsSortedByRating();
    }
}

