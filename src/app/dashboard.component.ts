import { Component,OnInit } from "@angular/core";
import { HeroService } from "./hero.service";
import { Hero } from "./hero";

@Component({
    selector:'my-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.sort( (a,b) => a.id - b.id ).slice(0,5) );
    }
    constructor(private heroService: HeroService) {
        
    }
    heroes:Hero[];
}