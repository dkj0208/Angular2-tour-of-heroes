import {Injectable} from '@angular/core';
import {Hero} from '../components/hero';
import {HEROES} from '../mock-heros';

@Injectable()

export class HeroService{
  getHeroes(){
    return Promise.resolve(HEROES);
  }
}

