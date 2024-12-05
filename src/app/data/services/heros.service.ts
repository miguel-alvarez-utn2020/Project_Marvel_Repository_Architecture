import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HeroRepository } from 'src/app/core/models/hero/hero.repository';
import { HerosRepositoryService } from '../repositories/heros-repository.service';
import { Hero } from 'src/app/core/models/hero/hero.model';


@Injectable({
  providedIn: 'root'
})
export class HerosService implements HeroRepository{



  constructor(private heroRepository: HerosRepositoryService) { }


  getHeroList(): Observable<Hero[]>{
    return this.heroRepository.getHeroList();
  };


  getHeroById(id: number): Observable<Hero> {
    return this.heroRepository.getHeroById(id);
  }




}
