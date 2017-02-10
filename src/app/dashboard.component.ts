import { Component,OnInit } from '@angular/core';
import {HeroService} from "./modules/hero/service/hero.service";
import {Hero} from "./pojo/hero";

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  providers:[HeroService],
  templateUrl: './view/dashboard.component.html',
  styleUrls:['./resource/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
