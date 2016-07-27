import {Injectable} from '@angular/core';
import {Hero} from '../components/hero';
import {HEROES} from '../mock-heros';

@Injectable()

export class HeroService{
  getHeroes(id: number){
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}

