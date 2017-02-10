import { Component, Input, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import {HeroService} from "../service/hero.service";
import {Hero} from "../../../pojo/hero";

@Component({
  selector: 'my-heroes',
  templateUrl:'../view/heroes.component.html',
  providers:[HeroService],
  styleUrls:['../../../resource/css/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  selectedHero: Hero;
  heroes:Hero[];
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
