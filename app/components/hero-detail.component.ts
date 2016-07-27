import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../services/hero.service';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/assets/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit, OnDestroy{
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ){}
  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero)
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  goBack(){
    window.history.back();
  }

}

