import { Component, OnInit } from '@angular/core';
import { Hero } from './components/hero';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroService } from './services/hero.service';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    template: `
                <h2>My Heroes</h2>
                <ul class="heroes">
                  <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                    <span class="badge">{{hero.id}}</span>{{hero.name}}
                  </li>
                </ul>
                
                <my-hero-detail [hero]="selectedHero"></my-hero-detail>
              `,
    styleUrls: ['app/assets/style.css'],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit{
  title = "Tour of Heros";
  heroes: Hero[];
  // heroService = new HeroService();
  selectedHero: Hero;

  constructor(private heroService: HeroService){}

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}






